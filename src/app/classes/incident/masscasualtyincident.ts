import { IncidentType } from './incidenttype';

export class MassCasualtyIncident implements IncidentType {
  typeName: string;
  latitude: number;
  longitude: number;
  casualties: number;

  constructor() {
    this.typeName = 'Mass Casualty Emergency';
    this.latitude = undefined;
    this.longitude = undefined;
    this.casualties = 5;
  }
}
