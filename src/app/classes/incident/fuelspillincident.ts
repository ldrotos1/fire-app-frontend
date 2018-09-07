import { IncidentType } from './incidenttype';

export class FuelSpillIncident implements IncidentType {
  typeName: string;
  latitude: number;
  longitude: number;
  spillSize: string;
  ignited: boolean;

  constructor() {
    this.typeName = 'Flammable Fuel Spill';
    this.latitude = undefined;
    this.longitude = undefined;
    this.spillSize = 'small';
    this.ignited = false;
  }
}
