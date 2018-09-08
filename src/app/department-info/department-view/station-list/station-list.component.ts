import { DepartmentStation } from '../../../classes/department/departmentstation';
import { Component, OnInit, NgZone, Input } from '@angular/core';
import { MapstateService } from '../../../services/mapstate.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  @Input() stations: Array<DepartmentStation>;

  private displayedColumns: string[] = [ 'stationDesignator', 'stationName', 'unitCount' ];

  constructor( private mapstateService: MapstateService,  private zone: NgZone ) { }

  ngOnInit() {
    this.mapstateService.currentHoverStationSym.subscribe( stationId => {
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

      for ( const station of this.stations ) {

        if ( station.stationId === stationId ) {
          station.isHighlighted = true;
        } else {
          station.isHighlighted = false;
        }
      }
    });
  }

}
