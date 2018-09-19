import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebPropertiesService {

  private host = 'http://localhost:8080';

  private apparatusTypesUrl = '/services/rest/information/apparatus/types';
  private apparatusTypeUrl = '/services/rest/information/apparatus/type';
  private stationsUrl = '/services/rest/information/station/all';
  private stationUrl = '/services/rest/information/station/byid';
  private departmentsUrl = '/services/rest/information/department/all';
  private departmentUrl = '/services/rest/information/department/byid';

  private structureFireUrl = '/services/rest/simulator/fire/incident';
  private medEmergencyUrl = '/services/rest/simulator/ems/incident';
  private vehicleAccidentUrl = '/services/rest/simulator/vehicleaccident/incident';
  private massCasUrl = '/services/rest/simulator/masscasualty/incident';
  private waterRescueUrl = '/services/rest/simulator/waterrescue/incident';
  private fuelSpillUrl = '/services/rest/simulator/fuelspill/incident';

  constructor() { }

    public getApparatusTypesUrl(): string {
    return this.host + this.apparatusTypesUrl;
  }

   public getApparatusTypeUrl(): string {
    return this.host + this.apparatusTypeUrl;
  }

  public getStationsUrl(): string {
    return this.host + this.stationsUrl;
  }

  public getStationUrl(): string {
    return this.host + this.stationUrl;
  }

  public getDepartmentsUrl(): string {
    return this.host + this.departmentsUrl;
  }

  public getDepartmentUrl(): string {
    return this.host + this.departmentUrl;
  }

  public getStructureFireUrl(): string {
    return this.host + this.structureFireUrl;
  }

  public getMedEmergencyUrl(): string {
    return this.host + this.medEmergencyUrl;
  }

  public getVehicleAccidentUrl(): string {
    return this.host + this.vehicleAccidentUrl;
  }

  public getMassCasUrl(): string {
    return this.host + this.massCasUrl;
  }

  public getWaterRescueUrl(): string {
    return this.host + this.waterRescueUrl;
  }

  public getFuelSpillUrl(): string {
    return this.host + this.fuelSpillUrl;
  }
}
