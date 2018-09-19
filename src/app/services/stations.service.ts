import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StationLite } from '../classes/station/StationLite';
import { Station } from '../classes/station/Station';
import { StationMapSymbol } from '../classes/station/stationmapsymbol';
import { WebPropertiesService } from './web-properties.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(
    private http: HttpClient,
    private webProps: WebPropertiesService ) {}

  /**
   * Gets an array of all fire stations.
   */
  getStations(): Observable<StationLite[]> {

    return this.http.get<StationLite[]>( this.webProps.getStationsUrl() );
  }

  /**
   * Gets an array of all fire stations.
   */
  getMapStations(): Observable<StationMapSymbol[]> {

    return this.http.get<StationMapSymbol[]>( this.webProps.getStationsUrl() );
  }

  /**
   * Gets the specified fire station
   */
  getStation( stationId: string ): Observable<Station> {

    const options = { params: new HttpParams().set( 'id', stationId ) };
    return this.http.get<Station>( this.webProps.getStationUrl(), options );
  }
}
