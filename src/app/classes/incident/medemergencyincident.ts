import { IncidentType } from './incidenttype';

export class MedEmergencyIncident implements IncidentType {
  typeName: string;
  latitude: number;
  longitude: number;

  constructor() {
    this.typeName = 'Medical Emergency';
    this.latitude = undefined;
    this.longitude = undefined;
  }
}
