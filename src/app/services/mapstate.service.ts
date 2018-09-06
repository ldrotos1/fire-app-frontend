import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapstateService {

  private stationSelection = new BehaviorSubject( 0 );
  private stationsSelection = new BehaviorSubject( [] );
  private rowHoverStation = new BehaviorSubject( 0 );
  private hoverStationSym = new BehaviorSubject( 0 );

  selectedStation = this.stationSelection.asObservable();
  selectedStations = this.stationsSelection.asObservable();
  currentRowHoverStation = this.rowHoverStation.asObservable();
  currentHoverStationSym = this.hoverStationSym.asObservable();

  constructor() { }

  /**
   * Updates the selected station
   */
  selectStation( stationId: number ): void {

    this.stationSelection.next( stationId );
  }

  /**
   * Updates the selected stations
   */
  selectStations( stationIds: Array<number> ): void {

    this.stationsSelection.next( stationIds );
  }

  /**
   * Updates the station row that the mouse is hovering over
   */
  setRowHoverStation( stationId: number ): void {

    this.rowHoverStation.next( stationId );
  }

  /**
   * Updates the station map symbol that the mouse is
   * hovering over
   */
  setHoverStationSym( stationId: number ): void {

    this.hoverStationSym.next( stationId );
  }
}
