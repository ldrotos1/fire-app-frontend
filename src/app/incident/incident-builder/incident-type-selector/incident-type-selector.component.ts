import { FuelSpillIncident } from '../../../classes/incident/fuel-spill-incident';
import { IncidentType } from '../../../classes/incident/incident-type';
import { MassCasualtyIncident } from '../../../classes/incident/mass-casualty-incident';
import { MedEmergencyIncident } from '../../../classes/incident/med-emergency-incident';
import { StructureFireIncident } from '../../../classes/incident/structure-fire-incident';
import { VehicleAccidentIncident } from '../../../classes/incident/vehicle-accident-incident';
import { WaterRescueIncident } from '../../../classes/incident/water-rescue-incident';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incident-type-selector',
  templateUrl: './incident-type-selector.component.html',
  styleUrls: ['./incident-type-selector.component.css']
})
export class IncidentTypeSelectorComponent implements OnInit {

  @Output() incidentSelected = new EventEmitter<boolean>();

  private incidentTypes: Array<string>;

  constructor() {

    // Populates the incident type array
    this.incidentTypes = new Array<string>();
    this.incidentTypes.push( 'Structure Fire' );
    this.incidentTypes.push( 'Medical Emergency' );
    this.incidentTypes.push( 'Vehicle Accident Emergency' );
    this.incidentTypes.push( 'Mass Casualty Emergency' );
    this.incidentTypes.push( 'Flammable Fuel Spill' );
    this.incidentTypes.push( 'Water Rescue Emergency' );
  }

  ngOnInit() {}

  /**
   * Emits the incident type selection event
   */
  selectionChange( event ) {
    this.incidentSelected.emit( event.value );
  }
}
