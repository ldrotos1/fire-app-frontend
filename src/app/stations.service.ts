import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StationLite } from './classes/StationLite';
import { Station } from './classes/Station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  private stationsUrl = 'http://localhost:8080/services/rest/information/station/all';
  private stationUrl = 'http://localhost:8080/services/rest/information/station/byid/${stationId}';

  constructor( private http: HttpClient ) {
  }

  /**
   * Gets an array of all fire stations.
   */
  getStations(): Observable<StationLite[]> {

    return this.http.get<StationLite[]>( this.stationsUrl );
  }

  /**
   * Gets the specified fire station
   */
  getStation( stationId: number ): Observable<Station> {

    return this.http.get<Station>( this.stationUrl );
  }
}
