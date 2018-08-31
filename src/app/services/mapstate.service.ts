import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapstateService {

  private stationSelection = new BehaviorSubject( '0' );
  private departmentSelection = new BehaviorSubject( 0 );
  private rowHoverStation = new BehaviorSubject( 0 );
  private hoverStationSym = new BehaviorSubject( 0 );

  selectedStation = this.stationSelection.asObservable();
  selectedDepartment = this.departmentSelection.asObservable();
  currentRowHoverStation = this.rowHoverStation.asObservable();
  currentHoverStationSym = this.hoverStationSym.asObservable();

  constructor() { }

  /**
   * Updates the selected station
   */
  selectStation( stationId: string ): void {

    this.stationSelection.next( stationId );
  }

  /**
   * Updates the selected department
   */
  selectDepartment( departmentId: number ): void {

    this.departmentSelection.next( departmentId );
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
