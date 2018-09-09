import { IncidentType } from './incident-type';

export class StructureFireIncident implements IncidentType {
  latitude: number;
  longitude: number;
  hydrantAccess: boolean;
  alarmNumber: number;

  constructor( lat: number, lon: number, alarmNum: number, hydrantAccess: boolean ) {
    this.latitude = lat;
    this.longitude = lon;
    this.hydrantAccess = hydrantAccess;
    this.alarmNumber = alarmNum;
  }
}
