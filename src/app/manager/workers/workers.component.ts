import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Page } from 'src/app/model/models';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  constructor( private api: ApiService ) { }

  workers: Worker[];

  ngOnInit(): void {
    this.api.get<Page<Worker>>(ENDPOINTS.API_WORKERS, { perPage: 10, page: 0} ).subscribe( response => {
      console.log( response );
      this.workers = response.elements;
    });
  }

  settingsOpen(){}

  open() {}

}
