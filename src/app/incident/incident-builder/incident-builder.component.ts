import { IncidentForm } from '../../classes/incident/incident-form';
import { IncidentType } from '../../classes/incident/incident-type';
import { CrosshairViewService } from '../../services/crosshair-view.service';
import { MapstateService } from '../../services/mapstate.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incident-builder',
  templateUrl: './incident-builder.component.html',
  styleUrls: ['./incident-builder.component.css']
})
export class IncidentBuilderComponent implements OnInit {

  @Output() simulate = new EventEmitter<IncidentType>();

  incidentType: string;
  incidentForm: IncidentForm;

  constructor(
    private mapStateService: MapstateService,
    private crosshairService: CrosshairViewService ) {
      this.incidentForm = new IncidentForm();
  }

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
        this.incidentForm.latitude = coord.lat;
        this.incidentForm.longitude = coord.lng;
        this.incidentForm.location = this._getIncidentLoc();

        // Remove the crosshair symbol from the cursor
        this.crosshairService.setCrosshairState( false );
      });
  }

  /**
   * Begins the incident response simulation
   */
  simulateResponse(): void {

    let incident;

    switch ( this.incidentType ) {
      case 'Structure Fire':
        incident = this.incidentForm.getStructureFireIncident();
        break;
      case 'Medical Emergency':
        incident = this.incidentForm.getMedEmergencyIncident();
        break;
      case 'Vehicle Accident Emergency':
        incident = this.incidentForm.getVehicleAccidentIncident();
        break;
      case 'Mass Casualty Emergency':
        incident = this.incidentForm.getMassCasualtyIncident();
        break;
      case 'Flammable Fuel Spill':
        incident = this.incidentForm.getFuelSpillIncident();
        break;
      case 'Water Rescue Emergency':
        incident = this.incidentForm.getWaterRescueIncident();
        break;
    }

    this.simulate.emit( incident );
    this.crosshairService.setCrosshairState( false );
  }

  /**
   * Returns a boolean indicating if the specified incident
   * type matches the current incident type
   */
  isIncidentType( incidentType: string ): boolean {

    if ( incidentType === this.incidentType ) {
      return true;
    }
    return false;
  }

  /**
   * Returns a formated string representing the current
   * incident location
   */
  _getIncidentLoc(): string {

    const incident = this.incidentForm;

    if ( incident.latitude !== undefined && incident.longitude !== undefined ) {
      return 'latitude: ' + incident.latitude.toFixed( 6 ) +
         ',  ' + 'longitude: ' + incident.longitude.toFixed( 6 );
    } else {
        return '';
    }
  }
}
