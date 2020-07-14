import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { Configuration, Page, ConfigurationUpdate } from '../model/models';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor( private api: ApiService ) { }

  getPage(perPage: number, page: number): Observable<Page<Configuration>> {
    return this.api.get<Page<Configuration>>(ENDPOINTS.API_CONFIGURATION, { perPage: perPage, page: page } ).pipe( 
      tap( response => {
            console.log( response );
      }));
  }

  update(name: string, update: ConfigurationUpdate) {
    return this.api.put<Configuration>(ENDPOINTS.API_CONFIGURATION_NAME, { name: name }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

}
