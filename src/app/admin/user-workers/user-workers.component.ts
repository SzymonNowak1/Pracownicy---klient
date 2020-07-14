import { Component, OnInit } from '@angular/core';
import { ENDPOINTS, ApiService } from 'src/app/auth/http/api.service';
import { Page, UserWorker, UserWorkerUpdate } from 'src/app/model/models';
import { PageEvent } from '../../common/page-event';
import { DEFAULT_PER_PAGE, APPLICATION_ROLES } from '../../const';
import { UserWorkerService } from '../../service/user-worker.service';

@Component({
  selector: 'app-user-workers',
  templateUrl: './user-workers.component.html',
  styleUrls: ['./user-workers.component.css']
})
export class UserWorkersComponent implements OnInit {
  constructor( private service: UserWorkerService) { }

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
    this.service.getPage(this.perPage, this.page - 1 ).subscribe( response => {
      this.userworkers = response.elements;
      this.totalPages = response.totalPages;
      this.normalizeRoles();
    });
  }

  putUserworker(id: string, update: UserWorkerUpdate) {
    this.service.update( id, update).subscribe( response => {
      this.currentEditedUserworker = null;
      this.getUserWorkersPage();
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
    this.currentEditedUserworker = JSON.parse(JSON.stringify(user));
    this.selectedCurrentUserworkerRole = this.currentEditedUserworker.roles[0];
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
