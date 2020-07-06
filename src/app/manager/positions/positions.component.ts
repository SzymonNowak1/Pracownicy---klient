import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Page } from 'src/app/model/models';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor( private api: ApiService ) { }

  positions: Position[];

  ngOnInit(): void {
    this.api.get<Page<Position>>(ENDPOINTS.API_POSITIONS, { perPage: 10, page: 0} ).subscribe( response => {
      console.log( response );
      this.positions = response.elements;
    });
  }

  settingsOpen(){}

  open() {}

}
