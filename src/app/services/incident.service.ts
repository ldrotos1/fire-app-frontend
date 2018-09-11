import { FuelSpillIncident } from '../classes/incident/fuel-spill-incident';
import { IncidentType } from '../classes/incident/incident-type';
import { MassCasualtyIncident } from '../classes/incident/mass-casualty-incident';
import { MedEmergencyIncident } from '../classes/incident/med-emergency-incident';
import { StructureFireIncident } from '../classes/incident/structure-fire-incident';
import { VehicleAccidentIncident } from '../classes/incident/vehicle-accident-incident';
import { WaterRescueIncident } from '../classes/incident/water-rescue-incident';
import { IncidentResponse } from '../classes/response/incident-response';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private host = 'http://localhost:8080';
  private urlStructureFire = '/services/rest/simulator/fire/incident';
  private urlMedEmergency = '/services/rest/simulator/ems/incident';
  private urlVehicleAccident = '/services/rest/simulator/vehicleaccident/incident';
  private urlMassCas = '/services/rest/simulator/masscasualty/incident';
  private urlWaterRescue = '/services/rest/simulator/waterrescue/incident';
  private urlFuelSpill = '/services/rest/simulator/fuelspill/incident';

  private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  constructor( private http: HttpClient ) { }

  /**
   * Calls the simulation REST service to simulate the
   * response to the incident
   */
  simulateIncidentResponse( incident: IncidentType ): Observable<IncidentResponse> {

    const url = this.host + this._getUrl( incident );
    return this.http.post<IncidentResponse>( url, incident, this.httpOptions );
  }

  /**
   * Determines the REST service URL that should be used
   * based on the incident type
   */
  _getUrl( incident: IncidentType ): string {

    if ( incident instanceof StructureFireIncident ) {

      return this.urlStructureFire;

    } else if ( incident instanceof MedEmergencyIncident ) {

      return this.urlMedEmergency;

    } else if ( incident instanceof VehicleAccidentIncident ) {

      return this.urlVehicleAccident;

    } else if ( incident instanceof MassCasualtyIncident ) {

      return this.urlMassCas;

    } else if ( incident instanceof FuelSpillIncident ) {

      return this.urlFuelSpill;

    } else if ( incident instanceof WaterRescueIncident ) {

      return this.urlWaterRescue;

    } else {

      return '';
    }
  }
}











