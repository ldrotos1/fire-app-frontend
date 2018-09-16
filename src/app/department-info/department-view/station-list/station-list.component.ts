import { DepartmentStation } from '../../../classes/department/departmentstation';
import { Component, OnInit, NgZone, Input } from '@angular/core';
import { MapstateService } from '../../../services/mapstate.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  @Input() set stations( stations: Array<DepartmentStation> ) {
    this.sortedStations = stations.slice();
  }

  private sortedStations: Array<DepartmentStation>;
  private displayedColumns: string[] = [ 'stationDesignator', 'stationName', 'unitCount' ];

  constructor( private mapstateService: MapstateService,  private zone: NgZone ) { }

  ngOnInit() {

    // Watches for changes in the hovering station
    this.mapstateService.watchHoverStationSym.subscribe( stationId => {
      this.updateTableRowSym( stationId );
    });
  }

  /**
   * Event handler for when the cursor mouses over a station
   * table row
   */
  mouseEnter( station ): void {
    this.mapstateService.setRowHoverStation( station.stationId );
  }

  /**
   * Event handler for when the cursor mouses out of a
   * station table row
   */
  mouseLeave( station ): void {
    this.mapstateService.setRowHoverStation( 0 );
  }

  /**
   * Sets the station table highlighted row to the
   * row corresponding to the specified station
   */
  updateTableRowSym( stationId ): void {

    this.zone.run(() => {

      for ( const station of this.sortedStations ) {

        if ( station.stationId === stationId ) {
          station.isHighlighted = true;
        } else {
          station.isHighlighted = false;
        }
      }
    });
  }

  /**
  * Sorts the table rows
  */
  sortData( sort: Sort ) {

    const data = this.sortedStations.slice();
    if ( !sort.active || sort.direction === '' ) {
      this.sortedStations = data;
      return;
    }

    this.sortedStations = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch ( sort.active ) {
        case 'unitCount': return this._compare( a.unitCount, b.unitCount, isAsc );
        default: return 0;
      }
    });
  }

  /*
   * Used to compare values for the table sorting
   */
  _compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
