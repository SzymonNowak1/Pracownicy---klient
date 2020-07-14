import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Configuration, Page, ConfigurationUpdate } from 'src/app/model/models';
import { PageEvent } from '../../common/page-event';
import { DEFAULT_PER_PAGE } from '../../const';
import { ConfigurationService } from '../../service/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor( private service: ConfigurationService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  currentEditedConfiguration: Configuration;

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
    this.service.getPage(this.perPage, this.page - 1).subscribe( response => {
      this.configurations = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  putConfiguration(name: string, update: ConfigurationUpdate) {
    this.service.update(name, update).subscribe( response => {
      this.currentEditedConfiguration = null;
      this.getConfigurationPage();
    });
  }

  editValue(conf: Configuration){
    this.currentEditedConfiguration = JSON.parse(JSON.stringify(conf));
  }

  saveValue() {
    this.putConfiguration(this.currentEditedConfiguration.name, this.currentEditedConfiguration)
  }

  open() {}
}
