import { IncidentType } from './incident-type';

export class FuelSpillIncident implements IncidentType {
  latitude: number;
  longitude: number;
  spillSize: string;
  ignited: boolean;

  constructor( lat: number, lon: number, size: string, ignited: boolean ) {
    this.latitude = lat;
    this.longitude = lon;
    this.spillSize = size;
    this.ignited = ignited;
  }
}
