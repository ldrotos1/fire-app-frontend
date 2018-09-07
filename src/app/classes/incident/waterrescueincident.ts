import { IncidentType } from './incidenttype';

export class WaterRescueIncident implements IncidentType {
  typeName: string;
  latitude: number;
  longitude: number;

  constructor() {
    this.typeName = 'Water Rescue Emergency';
    this.latitude = undefined;
    this.longitude = undefined;
  }
}
