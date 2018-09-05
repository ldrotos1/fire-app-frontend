import { ApparatusType } from '../classes/apparatustype';
import { ApparatusTypeLite } from '../classes/apparatustypelite';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApparatusService {

  private apparatusTypesUrl = 'http://localhost:8080/services/rest/information/apparatus/types';
  private apparatusTypeUrl = 'http://localhost:8080/services/rest/information/apparatus/type';

  constructor( private http: HttpClient ) { }

  /**
   * Gets an array of all fire departments.
   */
  getApparatusTypes(): Observable<ApparatusTypeLite[]> {

    return this.http.get<ApparatusTypeLite[]>( this.apparatusTypesUrl );
  }

  /**
   * Gets the specified fire station
   */
  getApparatusType( apparatusId: string ): Observable<ApparatusType> {

    const options = { params: new HttpParams().set( 'id', apparatusId ) };
    return this.http.get<ApparatusType>( this.apparatusTypeUrl, options );
  }
}
