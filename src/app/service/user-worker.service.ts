import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { UserWorker, UserWorkerUpdate, Page } from '../model/models';
import { tap } from '../../../node_modules/rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserWorkerService {

  constructor( private api: ApiService ) { }

  getPage(perPage: number, page: number): Observable<Page<UserWorker>> {
    return this.api.get<Page<UserWorker>>(ENDPOINTS.API_USERWORKERS, { perPage: perPage, page: page } ).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  update(id: string, update: UserWorkerUpdate) {
    return this.api.put<UserWorker>(ENDPOINTS.API_USERWORKERS_USERID, { userId: id }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }
  
}
