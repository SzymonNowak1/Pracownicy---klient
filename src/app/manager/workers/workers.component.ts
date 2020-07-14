import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Page, WorkerUpdate, Worker } from 'src/app/model/models';
import { DEFAULT_PER_PAGE } from '../../const';
import { PageEvent } from '../../common/page-event';
import { WorkerService } from '../../service/worker.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  constructor( private service: WorkerService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  workers: Worker[];

  panel = false;

  newWorker: WorkerUpdate = new WorkerUpdate();
  currentEditedWorker: Worker;

  ngOnInit(): void {
    this.getWorkersPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getWorkersPage();
  }

  getWorkersPage() {
    this.service.getPage( this.perPage, this.page - 1 ).subscribe( response => {
      this.workers = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  updateWorker(id: string, update: WorkerUpdate) {
    this.service.update( id, update ).subscribe( response => {
      this.currentEditedWorker = null;
      this.getWorkersPage();
    })
  }

  createWorker() {
    this.service.create(this.newWorker).subscribe( response => {
      this.getWorkersPage();
    })
  }

  editWorker(worker: Worker) {
    this.currentEditedWorker = JSON.parse(JSON.stringify(worker));
  }

  saveWorker() {
    const update: WorkerUpdate = new WorkerUpdate();
    update.firstName = this.currentEditedWorker.firstName;
    update.lastName = this.currentEditedWorker.lastName;
    update.phoneNumber = this.currentEditedWorker.phoneNumber;
    update.birthday = this.currentEditedWorker.birthday;
    update.address = this.currentEditedWorker.address;
    update.positionIds = this.currentEditedWorker.positionIds;

    this.updateWorker('' + this.currentEditedWorker.id, update);
  }

}
