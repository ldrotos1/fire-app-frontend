import { DepartmentLite } from '../../classes/department/departmentlite';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-selector',
  templateUrl: './department-selector.component.html',
  styleUrls: ['./department-selector.component.css']
})
export class DepartmentSelectorComponent implements OnInit {

  @Output() deptSelected = new EventEmitter<DepartmentLite>();

  departments: DepartmentLite[];

  constructor( private departmentService: DepartmentService ) { }

  ngOnInit() {
   this.getDepartments();
  }

  /**
   * Gets the list of fire departments that will populate the
   * department selector
   */
  getDepartments(): void {

    this.departmentService.getDepartments()
      .subscribe( departments => this.departments = departments );
  }

  /**
   * Emits the department selection event
   */
  selectionChange( event ) {
    this.deptSelected.emit( event.value );
  }
}
