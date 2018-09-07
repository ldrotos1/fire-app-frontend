import { IncidentType } from './incidenttype';

export class VehicleAccidentIncident implements IncidentType {
  typeName: string;
  latitude: number;
  longitude: number;
  injuries: number;
  vehicles: number;
  hazmat: boolean;
  entrapment: boolean;

  constructor() {
    this.typeName = 'Vehicle Accident Emergency';
    this.latitude = undefined;
    this.longitude = undefined;
    this.injuries = 0;
    this.vehicles = 1;
    this.hazmat = false;
    this.entrapment = false;
  }
}
