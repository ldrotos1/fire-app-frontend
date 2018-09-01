import { ChartData } from '../../classes/chartdata';
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Department } from '../../classes/department';
import { MapstateService } from '../../services/mapstate.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  @Input() department: Department;
  @Input() chartData: ChartData;

  private displayedColumns: string[] = [ 'stationDesignator', 'stationName', 'unitCount' ];

  constructor( private mapstateService: MapstateService,  private zone: NgZone ) {
  }

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

      for ( const station of this.department.stations ) {

        if ( station.stationId === stationId ) {
          station.isHighlighted = true;
        } else {
          station.isHighlighted = false;
        }
      }
    });
  }
}
