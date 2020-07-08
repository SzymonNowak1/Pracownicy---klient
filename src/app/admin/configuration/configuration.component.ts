import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Configuration, Page } from 'src/app/model/models';
import { PageEvent } from '../../common/page-event';
import { DEFAULT_PER_PAGE } from '../../const';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor( private api: ApiService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  configurations: Configuration[];

  ngOnInit(): void {
    this.getConfigurationPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getConfigurationPage();
  }

  getConfigurationPage() {
    this.api.get<Page<Configuration>>(ENDPOINTS.API_CONFIGURATION, { perPage: this.perPage, page: this.page - 1} ).subscribe( response => {
      console.log( response );
      this.configurations = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  settingsOpen(){}

  open() {}
}
