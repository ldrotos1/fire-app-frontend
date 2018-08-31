import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapstateService {

  private stationSelection = new BehaviorSubject( '0' );
  private departmentSelection = new BehaviorSubject( 0 );

  selectedStation = this.stationSelection.asObservable();
  selectedDepartment = this.departmentSelection.asObservable();

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
}
