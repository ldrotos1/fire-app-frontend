import { IncidentResponse } from '../classes/response/incident-response';
import { IncidentService } from '../services/incident.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  private title = 'Incident Simulator';
  private icon = 'notifications_active';
  private processing = false;
  private response: IncidentResponse;

  constructor(
    private incidentService: IncidentService,
    private errorSnackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  /**
   * Simulates the response to an emergency incident
   */
  onSimulate( incident ) {

    this.processing = true;

    this.incidentService.simulateIncidentResponse( incident ).subscribe(
        incidentResponse => {
          this.response = incidentResponse;
          this.processing = false;
        },
        error => {
          this.processing = false;
          this.errorSnackBar.open( error.error.message, null, { duration: 3000 });
        }
    );
  }
}
