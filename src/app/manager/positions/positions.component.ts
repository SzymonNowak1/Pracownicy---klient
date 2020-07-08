import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Page } from 'src/app/model/models';
import { DEFAULT_PER_PAGE } from '../../const';
import { PageEvent } from '../../common/page-event';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor( private api: ApiService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  positions: Position[];

  ngOnInit(): void {
    this.getPositionsPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getPositionsPage();
  }

  getPositionsPage() {
    this.api.get<Page<Position>>(ENDPOINTS.API_POSITIONS, { perPage: this.perPage, page: this.page - 1} ).subscribe( response => {
      console.log( response );
      this.positions = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  settingsOpen(){}

  open() {}

}
