import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { Page, PositionUpdate, Position } from '../model/models';
import { Observable } from '../../../node_modules/rxjs';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor( private api: ApiService ) { }

  getPage(perPage: number, page: number): Observable<Page<Position>> {
    return this.api.get<Page<Position>>(ENDPOINTS.API_POSITIONS, { perPage: perPage, page: page } ).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  update(id: string, update: PositionUpdate) {
    return this.api.put<Position>(ENDPOINTS.API_POSITIONS_ID, { id: id }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  create(object: PositionUpdate) {
    return this.api.post<Position>(ENDPOINTS.API_POSITIONS, {}, object ).pipe(
      tap( response => {
        console.log( response );
    }));
  }
}
