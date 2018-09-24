import { IncidentResponse } from '../classes/response/incident-response';
import { IncidentService } from '../services/incident.service';
import { MapstateService } from '../services/mapstate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit, OnDestroy {

  title = 'Incident Simulator';
  icon = 'notifications_active';
  processing = false;
  response: IncidentResponse;

  constructor(
    private incidentService: IncidentService,
    private mapStateService: MapstateService,
    private errorSnackBar: MatSnackBar ) {
  }

  ngOnInit() {
  }

  /**
   * Clears the incident response from the map
   */
  ngOnDestroy(): void {
    this.mapStateService.setResponseRoutes([]);
  }

  /**
   * Simulates the response to an emergency incident
   */
  onSimulate( incident ) {

    this.processing = true;

    this.incidentService.simulateIncidentResponse( incident ).subscribe(
        incidentResponse => {
          this.response = incidentResponse;
          this.mapStateService.setResponseRoutes( incidentResponse.reponseRoutes );
          this.processing = false;
        },
        error => {
          this.processing = false;
          this.errorSnackBar.open( error.error.message, null, { duration: 3000 });
        }
    );
  }

  /**
   * Clears the current incident response so that a new
   * incident can be simulated
   */
  clearResponse() {
    this.response = null;
    this.mapStateService.setResponseRoutes([]);
  }
}
