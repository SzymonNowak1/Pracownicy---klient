import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { Page, WorkerUpdate } from '../model/models';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor( private api: ApiService ) { }

  getPage(perPage: number, page: number): Observable<Page<Worker>> {
    return this.api.get<Page<Worker>>(ENDPOINTS.API_WORKERS, { perPage: perPage, page: page } ).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  update(id: string, update: WorkerUpdate) {
    return this.api.put<Worker>(ENDPOINTS.API_WORKERS_ID, { id: id }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  create(object: WorkerUpdate) {
    return this.api.post<Worker>(ENDPOINTS.API_WORKERS, {}, object ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

}
