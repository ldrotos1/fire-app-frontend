import { ChartData } from '../../classes/chartdata';
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Department } from '../../classes/department';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  @Input() department: Department;
  @Input() chartData: ChartData;

  constructor() {
  }

  ngOnInit() {
  }
}
