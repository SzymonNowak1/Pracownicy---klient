import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { Salary, Page, SalaryUpdate } from '../model/models';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor( private api: ApiService ) { }

  getPage(perPage: number, page: number): Observable<Page<Salary>> {
    return this.api.get<Page<Salary>>(ENDPOINTS.API_SALARIES, { perPage: perPage, page: page } ).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  getUsersAll(): Observable<Salary[]> {
    return this.api.get<Salary[]>(ENDPOINTS.API_SALARIES_MYSALARIES ).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  update(id: string, update: SalaryUpdate) {
    return this.api.put<Salary>(ENDPOINTS.API_SALARIES_ID, { id: id }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  create(object: SalaryUpdate) {
    return this.api.post<Salary>(ENDPOINTS.API_SALARIES, {}, object ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

}
