import { IncidentType } from '../../classes/incident/incidenttype';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-builder',
  templateUrl: './incident-builder.component.html',
  styleUrls: ['./incident-builder.component.css']
})
export class IncidentBuilderComponent implements OnInit {

  private incidentType: IncidentType;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Responds to the incident type selection event
   */
  incidentTypeSelected( incidentType ): void {
    this.incidentType = incidentType;
  }
}
