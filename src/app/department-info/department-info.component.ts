import { Component, OnInit, OnDestroy } from '@angular/core';
import { Department } from '../classes/department/department';
import { DepartmentService } from '../services/department.service';
import { MapstateService } from '../services/mapstate.service';
import { ChartData } from '../classes/charts/chartdata';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent implements OnInit, OnDestroy {

  title = 'Fire Department Information';
  icon = 'location_city';
  department: Department;
  chartData: ChartData;

  constructor(
    private departmentService: DepartmentService,
    private chartDataService: ChartDataService,
    private mapstateService: MapstateService ) { }

  ngOnInit() {
  }

  // Clears the selected stations on the map
  ngOnDestroy() {
    this.mapstateService.selectStations( [] );
  }

  /**
   * Gets the department information for the specified
   * department
   */
  onDeptSelected( dept ) {

    this.chartData = null;
    this.department = null;

    // Gets the department information
    this.departmentService.getDepartment( String( dept.departmentId ) )
        .subscribe( department => {

          // Sets stations' default highlight state
          for ( const station of department.stations ) {
            station.isHighlighted = false;
          }

          this.chartData = this.chartDataService.getUnitCategoryChartData( department );
          this.department = department;

          // Updates the selected stations on the map
          const stationIds = Array<number>();
          for ( const station of this.department.stations ) {
            stationIds.push( station.stationId );
          }
          this.mapstateService.selectStations( stationIds );
        }
    );
  }
}
