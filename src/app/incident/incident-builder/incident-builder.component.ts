import { IncidentType } from '../../classes/incident/incidenttype';
import { CrosshairViewService } from '../../services/crosshair-view.service';
import { MapstateService } from '../../services/mapstate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-builder',
  templateUrl: './incident-builder.component.html',
  styleUrls: ['./incident-builder.component.css']
})
export class IncidentBuilderComponent implements OnInit {

  private incidentType: IncidentType;

  constructor(
    private mapStateService: MapstateService,
    private crosshairService: CrosshairViewService ) { }

  ngOnInit() {
  }

  /**
   * Responds to the incident type selection event
   */
  incidentTypeSelected( incidentType ): void {
    this.incidentType = incidentType;
  }

  /**
   * Activates the incident location map selection
   */
  selectLocation(): void {

    // Sets the cursor to the crosshair symbol
    this.crosshairService.setCrosshairState( true );

    // Watches for the map click
    this.mapStateService.watchMapClickPosition
      .subscribe( coord => {

        // Sets the incident location
        this.incidentType.latitude = coord.lat;
        this.incidentType.longitude = coord.lng;

        // Remove the crosshair symbol from the cursor
        this.crosshairService.setCrosshairState( false );
      });
  }

  /**
   * Returns a formated string representing the current
   * incident location
   */
  getIncidentLoc(): string {

    const incident = this.incidentType;

    if ( incident.latitude !== undefined && incident.longitude !== undefined ) {
      return 'latitude: ' + incident.latitude.toFixed( 6 ) +
         ',  ' + 'longitude: ' + incident.longitude.toFixed( 6 );
    } else {
        return '';
    }
  }
}
