export class StationLite {
  stationId: number;
  stationNumber: number;
  stationDesignator: number;
  stationName: string;
  lat: number;
  lon: number;
  departmentId: number;
  departmentName: string;
  deptAbbreviation: string;
  
  constructor( station: StationLite ) {
    this.stationId = station.stationId;
    this.stationNumber = station.stationNumber;
    this.stationDesignator = station.stationDesignator;
    this.stationName = station.stationName;
    this.lat = station.lat;
    this.lon = station.lon;
    this.departmentId = station.departmentId;
    this.departmentName = station.departmentName;
    this.deptAbbreviation = station.deptAbbreviation; 
  }
}
