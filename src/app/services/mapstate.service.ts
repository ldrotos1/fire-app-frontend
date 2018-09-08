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
  private mapClickPosition = new Subject();

  selectedStations = this.stationsSelection.asObservable();
  currentRowHoverStation = this.rowHoverStation.asObservable();
  currentHoverStationSym = this.hoverStationSym.asObservable();
  getMapClickPosition = this.mapClickPosition.asObservable();

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
    console.log(coordinate);
    this.mapClickPosition.next( coordinate );
  }
}
