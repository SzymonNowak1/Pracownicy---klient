import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from '../../auth/http/api.service';
import { SalaryTarget, Page } from '../../model/models';

@Component({
  selector: 'app-salary-targets',
  templateUrl: './salary-targets.component.html',
  styleUrls: ['./salary-targets.component.css']
})
export class SalaryTargetsComponent implements OnInit {

  constructor( private api: ApiService ) { }

  salaryTargets: SalaryTarget[];

  panel = false;

  ngOnInit(): void {
    this.api.get<SalaryTarget[]>(ENDPOINTS.API_SALARYTARGETS_MYSALARYTARGETS ).subscribe( response => {
      console.log( response );
      this.salaryTargets = response;
    });
  }

  settingsOpen(){}

  open() {}
}
