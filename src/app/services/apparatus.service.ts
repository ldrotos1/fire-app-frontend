import { ApparatusType } from '../classes/apparatus/apparatustype';
import { ApparatusTypeLite } from '../classes/apparatus/apparatustypelite';
import { WebPropertiesService } from './web-properties.service';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApparatusService {

  constructor(
    private http: HttpClient,
    private webProps: WebPropertiesService ) {}

  /**
   * Gets an array of all fire departments.
   */
  getApparatusTypes(): Observable<ApparatusTypeLite[]> {

    return this.http.get<ApparatusTypeLite[]>( this.webProps.getApparatusTypesUrl() );
  }

  /**
   * Gets the specified fire station
   */
  getApparatusType( apparatusId: string ): Observable<ApparatusType> {

    const options = { params: new HttpParams().set( 'id', apparatusId ) };
    return this.http.get<ApparatusType>( this.webProps.getApparatusTypeUrl(), options );
  }
}
