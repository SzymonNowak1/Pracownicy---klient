import { Component, OnInit } from '@angular/core';
import { Salary, Page } from 'src/app/model/models';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  constructor( private api: ApiService ) { }

  salaries: Salary[];

  ngOnInit(): void {
    this.api.get<Page<Salary>>(ENDPOINTS.API_SALARIES, { perPage: 10, page: 0} ).subscribe( response => {
      console.log( response );
      this.salaries = response.elements;
    });
  }

  settingsOpen(){}

  open() {}
}
