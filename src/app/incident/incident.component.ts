import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  private title = 'Incident Simulator';
  private icon = 'notifications_active';

  constructor() { }

  ngOnInit() {
  }

}
