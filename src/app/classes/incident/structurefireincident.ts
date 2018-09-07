import { IncidentType } from './incidenttype';

export class StructureFireIncident implements IncidentType {
  typeName: string;
  latitude: number;
  longitude: number;
  hydrantAccess: boolean;
  alarmNumber: number;

  constructor() {
    this.typeName = 'Structure Fire';
    this.latitude = undefined;
    this.longitude = undefined;
    this.hydrantAccess = true;
    this.alarmNumber = 1;
  }
}
