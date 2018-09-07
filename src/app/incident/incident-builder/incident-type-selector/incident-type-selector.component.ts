import { FuelSpillIncident } from '../../../classes/incident/fuelspillincident';
import { IncidentType } from '../../../classes/incident/incidenttype';
import { MassCasualtyIncident } from '../../../classes/incident/masscasualtyincident';
import { MedEmergencyIncident } from '../../../classes/incident/medemergencyincident';
import { StructureFireIncident } from '../../../classes/incident/structurefireincident';
import { VehicleAccidentIncident } from '../../../classes/incident/vehicleaccidentincident';
import { WaterRescueIncident } from '../../../classes/incident/waterrescueincident';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incident-type-selector',
  templateUrl: './incident-type-selector.component.html',
  styleUrls: ['./incident-type-selector.component.css']
})
export class IncidentTypeSelectorComponent implements OnInit {

  @Output() incidentSelected = new EventEmitter<boolean>();

  private incidentTypes: Array<IncidentType>;

  constructor() {

    // Populates the incident type array
    this.incidentTypes = new Array<IncidentType>();
    this.incidentTypes.push( new StructureFireIncident() );
    this.incidentTypes.push( new MedEmergencyIncident() );
    this.incidentTypes.push( new VehicleAccidentIncident() );
    this.incidentTypes.push( new MassCasualtyIncident() );
    this.incidentTypes.push( new FuelSpillIncident() );
    this.incidentTypes.push( new WaterRescueIncident() );
  }

  ngOnInit() {}

  /**
   * Emits the incident type selection event
   */
  selectionChange( event ) {
    this.incidentSelected.emit( event.value );
  }
}
