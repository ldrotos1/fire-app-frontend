import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})
export class UserGuideComponent implements OnInit {

  title = 'User Guide';
  icon = 'info';

  constructor() { }

  ngOnInit() {
  }

}
