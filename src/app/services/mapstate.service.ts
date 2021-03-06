import { ResponseRoute } from '../classes/response/response-route';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapstateService {

  private stationsSelection = new BehaviorSubject( [] );
  private rowHoverStation = new BehaviorSubject( 0 );
  private hoverStationSym = new BehaviorSubject( 0 );
  private mapClickPosition = new Subject<L.LatLng>();
  private responseRoutes = new Subject<Array<ResponseRoute>>();
  private rowHoverUnit = new BehaviorSubject( 0 );
  private hoverRouteSym = new BehaviorSubject( 0 );

  watchSelectedStations = this.stationsSelection.asObservable();
  watchRowHoverStation = this.rowHoverStation.asObservable();
  watchHoverStationSym = this.hoverStationSym.asObservable();
  watchMapClickPosition = this.mapClickPosition.asObservable();
  watchResponseRoutes = this.responseRoutes.asObservable();
  watchRowHoverUnit = this.rowHoverUnit.asObservable();
  watchHoverRouteSym = this.hoverRouteSym.asObservable();

  constructor() { }

  /**
   * Sends a message to subscribers with a updated station
   * selection
   */
  selectStations( stationIds: Array<number> ): void {

    this.stationsSelection.next( stationIds );
  }

  /**
   * Sends a message to subscribers with a updated row
   * hover station
   */
  setRowHoverStation( stationId: number ): void {

    this.rowHoverStation.next( stationId );
  }

  /**
   * Sends a message to subscribers with a updated map
   * station symbol hover
   */
  setHoverStationSym( stationId: number ): void {

    this.hoverStationSym.next( stationId );
  }

  /**
   * Sends a message to subscribers with a updated map
   * click location
   */
  setMapClickPosition( coordinate: L.LatLng ) {

    this.mapClickPosition.next( coordinate );
  }

  /**
   * Sends a message to subscribers with a updated set
   * of response routes
   */
  setResponseRoutes( routes: Array<ResponseRoute> ) {

    this.responseRoutes.next( routes );
  }

  /**
   * Sends a message to subscribers with a updated row
   * hover unit
   */
  setRowHoverUnit( stationId: number ): void {

    this.rowHoverUnit.next( stationId );
  }

  /**
   * Sends a message to subscribers with a updated map
   * route symbol hover
   */
  setHoverRouteSym( stationId: number ): void {

    this.hoverRouteSym.next( stationId );
  }
}
