import { IncidentType } from './incident-type';

export class WaterRescueIncident implements IncidentType {
  latitude: number;
  longitude: number;

  constructor(  lat: number, lon: number ) {
    this.latitude = lat;
    this.longitude = lon;
  }
}
