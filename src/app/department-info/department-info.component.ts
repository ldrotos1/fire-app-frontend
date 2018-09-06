import { Component, OnInit, OnDestroy } from '@angular/core';
import { Department } from '../classes/department';
import { DepartmentService } from '../services/department.service';
import { MapstateService } from '../services/mapstate.service';
import { ChartData } from '../classes/chartdata';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent implements OnInit, OnDestroy {

  private title = 'Fire Department Information';
  private icon = 'location_city';
  private department: Department;
  private chartData: ChartData;

  constructor(
    private departmentService: DepartmentService,
    private mapstateService: MapstateService ) { }

  ngOnInit() {
  }

  ngOnDestroy() {

    // Clears the selected departments on the map
    this.mapstateService.selectStations( [] );
  }

  /**
   * Gets the department information for the specified
   * department
   */
  onDeptSelected( dept ) {

    // Gets the department information
    this.departmentService.getDepartment( String( dept.departmentId ) )
        .subscribe( department => {

          // Sets stations' default highlight state
          for ( const station of department.stations ) {
            station.isHighlighted = false;
          }

          // Creates the chart data object
          const chartDataPoints = new Array<number>();
          chartDataPoints.push( department.unitTypeMap[ 'Fire Suppression' ] );
          chartDataPoints.push( department.unitTypeMap[ 'Aerial Support' ] );
          chartDataPoints.push( department.unitTypeMap[ 'Rescue Operations' ] );
          chartDataPoints.push( department.unitTypeMap[ 'Medical Support' ] );
          chartDataPoints.push( department.unitTypeMap[ 'Command' ] );
          chartDataPoints.push( department.unitTypeMap[ 'Special Incident' ] );
          chartDataPoints.push( department.unitTypeMap[ 'General Support' ] );

          const chartDataset = new ChartData();
          chartDataset.dataPoints = chartDataPoints;
          chartDataset.dataLabels = [
            'Fire Suppression',
            'Aerial Support',
            'Rescue Operations',
            'Medical Support',
            'Command',
            'Special Incident',
            'General Support'
          ];

          this.department = department;
          this.chartData = chartDataset;

          // Updates the map state
          const stationIds = Array<number>();
          for ( const station of this.department.stations ) {
            stationIds.push( station.stationId );
          }
          this.mapstateService.selectStations( stationIds );
        }
    );
  }
}
