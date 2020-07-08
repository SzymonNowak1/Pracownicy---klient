import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/model/models';
import { ApiService, ENDPOINTS } from '../../auth/http/api.service';

@Component({
  selector: 'app-my-salaries',
  templateUrl: './my-salaries.component.html',
  styleUrls: ['./my-salaries.component.css']
})
export class MySalariesComponent implements OnInit {

  constructor( private api: ApiService ) { }

  salaries: Salary[];

  ngOnInit(): void {
    this.api.get<Salary[]>( ENDPOINTS.API_SALARIES_MYSALARIES ).subscribe( response => {
      console.log( response );
      this.salaries = response;
    });
  }

  settingsOpen(){}

  open() {}

}
