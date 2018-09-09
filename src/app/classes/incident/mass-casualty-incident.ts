import { IncidentType } from './incident-type';

export class MassCasualtyIncident implements IncidentType {
  latitude: number;
  longitude: number;
  casualties: number;

  constructor( lat: number, lon: number, casualties: number ) {
    this.latitude = lat;
    this.longitude = lon;
    this.casualties = casualties;
  }
}
