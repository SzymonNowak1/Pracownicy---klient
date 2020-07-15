import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/model/models';
import { ApiService, ENDPOINTS } from '../../auth/http/api.service';
import { SalaryService } from '../../service/salary.service';

@Component({
  selector: 'app-my-salaries',
  templateUrl: './my-salaries.component.html',
  styleUrls: ['./my-salaries.component.css']
})
export class MySalariesComponent implements OnInit {

  constructor( private service: SalaryService ) { }

  salaries: Salary[];
 
  ngOnInit(): void {
    this.getUserSalaries();
  }

  getUserSalaries() {
    this.service.getUsersAll().subscribe( response => {
      this.salaries = response;
    });
  }


}
