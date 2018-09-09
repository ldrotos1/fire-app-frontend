import { IncidentType } from './incident-type';

export class MedEmergencyIncident implements IncidentType {
  latitude: number;
  longitude: number;

  constructor( lat: number, lon: number ) {
    this.latitude = lat;
    this.longitude = lon;
  }
}
