import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapstateService {

  private stationsSelection = new BehaviorSubject( [] );
  private rowHoverStation = new BehaviorSubject( 0 );
  private hoverStationSym = new BehaviorSubject( 0 );

  selectedStations = this.stationsSelection.asObservable();
  currentRowHoverStation = this.rowHoverStation.asObservable();
  currentHoverStationSym = this.hoverStationSym.asObservable();

  constructor() { }

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
