import { RespondingApparatus } from '../../../classes/response/responding-apparatus';
import { MapstateService } from '../../../services/mapstate.service';
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-incident-response-table',
  templateUrl: './incident-response-table.component.html',
  styleUrls: ['./incident-response-table.component.css']
})
export class IncidentResponseTableComponent implements OnInit {

  @Input() respondingUnits: Array<RespondingApparatus>;

  private sortedData: RespondingApparatus[];
  private displayedColumns: string[] = [
    'unitDesignator',
    'typeName',
    'stationName',
    'deptAbbreviation',
    'travelTime'
  ];

  constructor( private mapstateService: MapstateService, private zone: NgZone ) {}

  ngOnInit() {

    // Sets up the table sorting
    this.sortedData = this.respondingUnits.slice();

    // Watches for changes in the hovering route
    this.mapstateService.watchHoverRouteSym.subscribe( stationId => {
      this.updateTableRowSym( stationId );
    });
  }

  /**
   * Returns a formated tooltip message based on the
   * apparatus type for the specified apparatus
   */
  getUnitToolTip( unit: RespondingApparatus ): string {
    return unit.typeName + ' - ' + unit.category;
  }

  /**
   * Event handler for when the cursor mouses over a unit
   * table row
   */
  mouseEnter( unit: RespondingApparatus ): void {
    this.mapstateService.setRowHoverUnit( unit.stationId );
  }

  /**
   * Event handler for when the cursor mouses out of a
   * unit table row
   */
  mouseLeave( unit: RespondingApparatus ): void {
    this.mapstateService.setRowHoverUnit( 0 );
  }

  /**
   * Sets the station table highlighted row to the
   * row corresponding to the specified station
   */
  updateTableRowSym( stationId ): void {

    this.zone.run(() => {

      for ( const unit of this.sortedData ) {

        if ( unit.stationId === stationId ) {
          unit.isHighlighted = true;
        } else {
          unit.isHighlighted = false;
        }
      }
    });
  }

  /**
   * Sorts the table rows
   */
  sortData( sort: Sort ) {

    const data = this.sortedData.slice();
    if ( !sort.active || sort.direction === '' ) {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch ( sort.active ) {
        case 'typeName': return this._compare( a.typeName, b.typeName, isAsc );
        case 'stationName': return this._compare( a.stationName, b.stationName, isAsc );
        case 'deptAbbreviation': return this._compare( a.deptAbbreviation, b.deptAbbreviation, isAsc );
        case 'travelTime': return this._compare( a.travelTime, b.travelTime, isAsc );
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
