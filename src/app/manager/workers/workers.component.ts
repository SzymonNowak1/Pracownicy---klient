import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Page } from 'src/app/model/models';
import { DEFAULT_PER_PAGE } from '../../const';
import { PageEvent } from '../../common/page-event';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  constructor( private api: ApiService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  workers: Worker[];

  panel = false;

  ngOnInit(): void {
    this.getWorkersPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getWorkersPage();
  }

  getWorkersPage() {
    this.api.get<Page<Worker>>(ENDPOINTS.API_WORKERS, { perPage: this.perPage, page: this.page - 1} ).subscribe( response => {
      console.log( response );
      this.workers = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  settingsOpen(){}

  open() {}

}
