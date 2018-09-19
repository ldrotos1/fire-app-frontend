import { FuelSpillIncident } from '../classes/incident/fuel-spill-incident';
import { IncidentType } from '../classes/incident/incident-type';
import { MassCasualtyIncident } from '../classes/incident/mass-casualty-incident';
import { MedEmergencyIncident } from '../classes/incident/med-emergency-incident';
import { StructureFireIncident } from '../classes/incident/structure-fire-incident';
import { VehicleAccidentIncident } from '../classes/incident/vehicle-accident-incident';
import { WaterRescueIncident } from '../classes/incident/water-rescue-incident';
import { IncidentResponse } from '../classes/response/incident-response';
import { WebPropertiesService } from './web-properties.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  constructor(
    private http: HttpClient,
    private webProps: WebPropertiesService ) { }

  /**
   * Calls the simulation REST service to simulate the
   * response to the incident
   */
  simulateIncidentResponse( incident: IncidentType ): Observable<IncidentResponse> {

    const url = this._getUrl( incident );
    return this.http.post<IncidentResponse>( url, incident, this.httpOptions );
  }

  /**
   * Determines the REST service URL that should be used
   * based on the incident type
   */
  _getUrl( incident: IncidentType ): string {

    if ( incident instanceof StructureFireIncident ) {

      return this.webProps.getStructureFireUrl();

    } else if ( incident instanceof MedEmergencyIncident ) {

      return this.webProps.getMedEmergencyUrl();

    } else if ( incident instanceof VehicleAccidentIncident ) {

      return this.webProps.getVehicleAccidentUrl();

    } else if ( incident instanceof MassCasualtyIncident ) {

      return this.webProps.getMassCasUrl();

    } else if ( incident instanceof FuelSpillIncident ) {

      return this.webProps.getFuelSpillUrl();

    } else if ( incident instanceof WaterRescueIncident ) {

      return this.webProps.getWaterRescueUrl();

    } else {

      return '';
    }
  }
}











