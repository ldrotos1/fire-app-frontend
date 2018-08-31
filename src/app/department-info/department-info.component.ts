import { Department } from '../classes/department';
import { DepartmentService } from '../services/department.service';
import { MapstateService } from '../services/mapstate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent implements OnInit, OnDestroy {

  private title = 'Fire Department Information';
  private icon = 'location_city';
  private department: Department;

  constructor(
    private departmentService: DepartmentService,
    private mapstateService: MapstateService ) { }

  ngOnInit() {
  }

  ngOnDestroy() {

    // Clears the selected departments on the map
    this.mapstateService.selectDepartment( 0 );
  }

  /**
   * Gets the department information for the specified
   * department
   */
  onDeptSelected( dept ) {

    // Gets the department information
    this.departmentService.getDepartment( String( dept.departmentId ) )
        .subscribe( department => {
          this.department = department;

          // Updates the map state
          this.mapstateService.selectDepartment( department.departmentId );
        });
  }
}
