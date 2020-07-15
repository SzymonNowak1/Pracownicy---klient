import { Component, OnInit } from '@angular/core';
import { Salary, Page, SalaryUpdate } from 'src/app/model/models';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { DEFAULT_PER_PAGE } from '../../const';
import { PageEvent } from '../../common/page-event';
import { SalaryService } from '../../service/salary.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  constructor( private service: SalaryService ) { }

  perPage = DEFAULT_PER_PAGE;
  page = 1;
  totalPages = 1;

  salaries: Salary[];

  panel = false;

  newSalary: SalaryUpdate = new SalaryUpdate();
  currentEditedSalary: Salary;

  ngOnInit(): void {
    this.getSalariesPage();
  }

  pageChanged(event: PageEvent ) {
    this.page = event.page;
    this.totalPages = event.pages;

    this.getSalariesPage();
  }

  getSalariesPage() {
    this.service.getPage( this.perPage, this.page - 1 ).subscribe( response => {
      this.salaries = response.elements;
      this.totalPages = response.totalPages;
    });
  }

  updateSalary(id: string, update: SalaryUpdate) {
    this.service.update( id, update).subscribe( response => {
      this.currentEditedSalary = null;
      this.getSalariesPage();
    });
  }

  createSalary() {
    this.service.create(this.newSalary).subscribe( response => {
      this.getSalariesPage();
    });
  }

  editSalary(salary: Salary) {
    this.currentEditedSalary = JSON.parse(JSON.stringify(salary));
  }

  saveSalary() {
    const update: SalaryUpdate = new SalaryUpdate();
    update.bonus = this.currentEditedSalary.bonus;
    update.date = this.currentEditedSalary.date;
    update.salaryTargetId = this.currentEditedSalary.salaryTargetId;

    this.updateSalary('' + this.currentEditedSalary.id, update);
  }

}
