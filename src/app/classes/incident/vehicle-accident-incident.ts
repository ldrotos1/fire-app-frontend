import { IncidentType } from './incident-type';

export class VehicleAccidentIncident implements IncidentType {
  latitude: number;
  longitude: number;
  injuries: number;
  vehicles: number;
  hazmat: boolean;
  entrapment: boolean;

  constructor( lat: number, lon: number, injuries: number, vehicles: number,
    isHazmat: boolean, hasEntrapment: boolean ) {

    this.latitude = lat;
    this.longitude = lon;
    this.injuries = injuries;
    this.vehicles = vehicles;
    this.hazmat = isHazmat;
    this.entrapment = hasEntrapment;
  }
}
