import { Department } from '../../classes/department';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  @Input() department: Department;

  constructor() { }

  ngOnInit() {
  }

}
