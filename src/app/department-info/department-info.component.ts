import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent implements OnInit {

  title = 'Fire Department Information';
  icon = 'location_city';

  constructor() { }

  ngOnInit() {
  }

  onDeptSelected( value ) {
    console.log('Station selected');
  }
}
