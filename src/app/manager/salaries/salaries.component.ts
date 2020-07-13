import { Component, OnInit } from '@angular/core';
import { Salary, Page } from 'src/app/model/models';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { DEFAULT_PER_PAGE } from '../../const';
import { PageEvent } from '../../common/page-event';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  constructor( private api: ApiService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  salaries: Salary[];

  panel = false;

  ngOnInit(): void {
    this.getSalariesPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getSalariesPage();
  }

  getSalariesPage() {
    this.api.get<Page<Salary>>(ENDPOINTS.API_SALARIES, { perPage: this.perPage, page: this.page - 1} ).subscribe( response => {
      console.log( response );
      this.salaries = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  settingsOpen(){}

  open() {}
}
