import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapstateService {

  private stationSelection = new BehaviorSubject( '0' );

  selectedStation = this.stationSelection.asObservable();

  constructor() { }

  /**
   * Updates the selected station
   */
  selectStation( stationId: string ): void {

    this.stationSelection.next( stationId );
  }
}
