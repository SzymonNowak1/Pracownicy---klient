import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Page, PositionUpdate, Position } from 'src/app/model/models';
import { DEFAULT_PER_PAGE } from '../../const';
import { PageEvent } from '../../common/page-event';
import { PositionService } from '../../service/position.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor( private service: PositionService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  positions: Position[];

  panel = false;

  newPosition: PositionUpdate = new PositionUpdate();
  currentEditedPosition: Position;


  ngOnInit(): void {
    this.getPositionsPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getPositionsPage();
  }

  getPositionsPage() {
    this.service.getPage( this.perPage, this.page - 1 ).subscribe( response => {
      this.positions = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  putPosition(id: string, update: PositionUpdate) {
    this.service.update( id, update).subscribe( response => {
      this.currentEditedPosition = null;
      this.getPositionsPage();
    });
  }

  addPosition() {
    this.service.create(this.newPosition).subscribe( response => {
      this.getPositionsPage();
    });
  }

  editPosition(position: Position) {
    this.currentEditedPosition = JSON.parse(JSON.stringify(position));
  }

  savePosition() {
    const update: PositionUpdate = new PositionUpdate();
    update.name = this.currentEditedPosition.name;
    update.description = this.currentEditedPosition.description;
    update.base = this.currentEditedPosition.base;

    this.putPosition('' + this.currentEditedPosition.id, update);
  }

}
