import { IncidentResponse } from '../../classes/response/incident-response';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incident-response',
  templateUrl: './incident-response.component.html',
  styleUrls: ['./incident-response.component.css']
})
export class IncidentResponseComponent implements OnInit {

  @Input() incidentResponse: IncidentResponse;
  @Output() clearResponse = new EventEmitter<boolean>();

  private fastestArrivalTime: number;
  private slowestArrivalTime: number;

  constructor() {
  }

  ngOnInit() {

    // Gets the fastest and slowest arrival times
    const lastIndex = this.incidentResponse.respondingApparatus.length - 1;

    this.slowestArrivalTime =
      this.incidentResponse.respondingApparatus[lastIndex].travelTime;

    this.fastestArrivalTime =
      this.incidentResponse.respondingApparatus[0].travelTime;
  }

  /**
   * Clears the current incident response so that a new
   * incident can be simulated
   */
  newIncident() {
    this.clearResponse.emit( true );
  }
}
