import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StationLite } from '../classes/StationLite';
import { Station } from '../classes/Station';
import { StationMapSymbol } from '../classes/stationmapsymbol';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  private stationsUrl = 'http://localhost:8080/services/rest/information/station/all';
  private stationUrl = 'http://localhost:8080/services/rest/information/station/byid';

  constructor( private http: HttpClient ) {
  }

  /**
   * Gets an array of all fire stations.
   */
  getStations(): Observable<StationLite[]> {

    return this.http.get<StationLite[]>( this.stationsUrl );
  }

  /**
   * Gets an array of all fire stations.
   */
  getMapStations(): Observable<StationMapSymbol[]> {

    return this.http.get<StationMapSymbol[]>( this.stationsUrl );
  }

  /**
   * Gets the specified fire station
   */
  getStation( stationId: string ): Observable<Station> {

    const options = { params: new HttpParams().set( 'id', stationId ) };
    return this.http.get<Station>( this.stationUrl, options );
  }
}
