import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymbologyService {

  private stationDefaultSym;
  private stationSelectedSym;
  private stationGreyOutSym;
  private stationGreyOutHoverSym;

  constructor() {

    this.stationDefaultSym = {
      color: '#000000',
      weight: 1,
      opacity: 1.0,
      fillColor: '#E60000',
      fillOpacity: 1.0
    };

    this.stationSelectedSym = {
      color: '#000000',
      weight: 2,
      opacity: 1.0,
      fillColor: '#F7FE2E',
      fillOpacity: 1.0
    };

    this.stationGreyOutSym = {
      color: '#999999',
      weight: 2,
      opacity: 1.0,
      fillColor: '#d9d9d9',
      fillOpacity: 1.0
    };

    this.stationGreyOutHoverSym = {
      color: '#999999',
      weight: 2,
      opacity: 1.0,
      fillColor: '#d9d9d9',
      fillOpacity: 1.0
    };
  }

  /**
   * Returns the station symbology style object for
   * a unselected station
   */
  getStationSym(): object {
    return this.stationDefaultSym;
  }

  /**
   * Returns the station symbology style object for
   * a selected station
   */
  getSelectedStationSym(): object {
    return this.stationSelectedSym;
  }

  /**
   * Returns the station symbology style object for
   * a greyed out station
   */
  getGreyOutStationSym(): object {
    return this.stationGreyOutSym;
  }

  /**
   * Returns the station symbology style object for
   * a greyed out station that is being hovered over
   */
  getGreyOutStationHoverSym(): object {
    return this.stationGreyOutHoverSym;
  }
}
