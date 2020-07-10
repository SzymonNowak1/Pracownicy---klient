import { Component, OnInit } from '@angular/core';
import { ENDPOINTS, ApiService } from 'src/app/auth/http/api.service';
import { Page, UserWorker, UserWorkerUpdate } from 'src/app/model/models';
import { PageEvent } from '../../common/page-event';
import { DEFAULT_PER_PAGE, APPLICATION_ROLES } from '../../const';

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

  currentEditedUserworker: UserWorker;
  selectedCurrentUserworkerRole: string;
  availableRoles: string[] = APPLICATION_ROLES;

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
      this.normalizeRoles();
    });
  }

  putUserworker(id: string, update: UserWorkerUpdate) {
    this.api.put<UserWorker>(ENDPOINTS.API_USERWORKERS_USERID, {userId: id}, update).subscribe( response => {
      console.log( response );

      this.currentEditedUserworker = null;
    });
  }

  normalizeRoles() {
    this.userworkers.forEach( worker => {
      worker.roles = worker.roles.filter( role => {
        return APPLICATION_ROLES.includes( role );
      })
    })
  }

  editUserworker(user: UserWorker) {
    this.currentEditedUserworker = user;
    this.selectedCurrentUserworkerRole = user.roles[0];
  }

  saveUserworker() {
    const update: UserWorkerUpdate  = new UserWorkerUpdate();
    update.userId = this.currentEditedUserworker.userId;
    update.workerId = this.currentEditedUserworker.workerId;
    update.email = this.currentEditedUserworker.email;
    update.role = this.selectedCurrentUserworkerRole;
    update.username = this.currentEditedUserworker.username;

    this.putUserworker('' + update.userId, update);
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
