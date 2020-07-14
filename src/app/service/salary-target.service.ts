import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { SalaryTarget, SalaryTargetUpdate } from '../model/models';
import { Observable } from '../../../node_modules/rxjs';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaryTargetService {

  constructor( private api: ApiService ) { }

  getUsersAll(): Observable<SalaryTarget[]> {
    return this.api.get<SalaryTarget[]>(ENDPOINTS.API_SALARYTARGETS_MYSALARYTARGETS ).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  update(id: string, update: SalaryTargetUpdate) {
    return this.api.put<SalaryTarget>(ENDPOINTS.API_SALARYTARGETS_ID, { id: id }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  create(object: SalaryTargetUpdate) {
    return this.api.post<SalaryTarget>(ENDPOINTS.API_SALARYTARGETS, {}, object ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  select(id: string) {
    return this.api.put<SalaryTarget>(ENDPOINTS.API_SALARYTARGETS_ID_SELECT, {id: id} ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

}
