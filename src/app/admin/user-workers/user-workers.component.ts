import { Component, OnInit } from '@angular/core';
import { ENDPOINTS, ApiService } from 'src/app/auth/http/api.service';
import { Page, UserWorker } from 'src/app/model/models';
import { PageEvent } from '../../common/page-event';
import { DEFAULT_PER_PAGE } from '../../const';

@Component({
  selector: 'app-user-workers',
  templateUrl: './user-workers.component.html',
  styleUrls: ['./user-workers.component.css']
})
export class UserWorkersComponent implements OnInit {
  constructor( private api: ApiService) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  userworkers: UserWorker[];

  ngOnInit(): void {
    this.getUserWorkersPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getUserWorkersPage();
  }

  getUserWorkersPage() {
    this.api.get<Page<UserWorker>>(ENDPOINTS.API_USERWORKERS, { perPage: this.perPage, page: this.page - 1} ).subscribe( response => {
      console.log( response );
      this.userworkers = response.elements;
      this.totalPages = response.totalPages;   
    });
  }

  open(){
    var element = document.getElementById("sForm")
    element.classList.toggle("open");
  }
  
  close(){
    var element = document.getElementById("sForm")
    element.classList.remove("open");
  }
  settingsOpen() {
    document.getElementById("yes").style.display = "block";
  }
}
