import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from '../../auth/http/api.service';
import { SalaryTarget, Page, SalaryTargetUpdate } from '../../model/models';
import { SalaryTargetService } from '../../service/salary-target.service';

@Component({
  selector: 'app-salary-targets',
  templateUrl: './salary-targets.component.html',
  styleUrls: ['./salary-targets.component.css']
})
export class SalaryTargetsComponent implements OnInit {

  constructor( private service: SalaryTargetService ) { }

  salaryTargets: SalaryTarget[];

  panel = false;

  newSalaryTarget: SalaryTargetUpdate = new SalaryTargetUpdate();
  currentEditedSalaryTarget: SalaryTarget;

  ngOnInit(): void {
    this.getSalaryTargets();
  }

  editSalaryTarget(salaryTarget: SalaryTarget) {
    this.currentEditedSalaryTarget = JSON.parse(JSON.stringify(salaryTarget));
  }

  saveSalaryTarget() {
    const update: SalaryTargetUpdate = new SalaryTargetUpdate();
    update.name = this.currentEditedSalaryTarget.name;
    update.bankAccount = this.currentEditedSalaryTarget.bankAccount;

    this.updateSalaryTarget('' + this.currentEditedSalaryTarget.id, update);
  }

  getSalaryTargets() {
    this.service.getUsersAll().subscribe( response => {
      this.salaryTargets = response;
    });
  }  

  updateSalaryTarget(id: string, update: SalaryTargetUpdate) {
    this.service.update(id, update).subscribe( response => {
      this.currentEditedSalaryTarget = null;
      this.getSalaryTargets();
    });
  }

  createSalaryTarget() {
    this.service.create(this.newSalaryTarget).subscribe( response => {
      this.getSalaryTargets();
    });
  }

  selectSalaryTarget(id: string) {
    this.service.select(id).subscribe( response => {
      this.getSalaryTargets();
    });
  }

}
