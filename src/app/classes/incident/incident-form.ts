import { FuelSpillIncident } from './fuel-spill-incident';
import { MassCasualtyIncident } from './mass-casualty-incident';
import { MedEmergencyIncident } from './med-emergency-incident';
import { StructureFireIncident } from './structure-fire-incident';
import { VehicleAccidentIncident } from './vehicle-accident-incident';
import { WaterRescueIncident } from './water-rescue-incident';

export class IncidentForm {
  latitude: number;
  longitude: number;
  hydrantAccess: boolean;
  alarmNumber: number;
  injuries: number;
  vehicles: number;
  hazmat: boolean;
  entrapment: boolean;
  casualties: number;
  spillSize: string;
  ignited: boolean;

  constructor() {
    this.latitude = undefined;
    this.longitude = undefined;
    this.hydrantAccess = true;
    this.alarmNumber = 1;
    this.injuries = 0;
    this.vehicles = 1;
    this.hazmat = false;
    this.entrapment = false;
    this.casualties = 5;
    this.spillSize = 'small';
    this.ignited = false;
  }

  /**
   * Returns a structure fire incident object with field values
   * corresponding to the relevant incident form values
   */
  getStructureFireIncident(): StructureFireIncident {
    return new StructureFireIncident( this.latitude, this.longitude,
      this.alarmNumber, this.hydrantAccess );
  }

  /**
   * Returns a medical emergency incident object with field values
   * corresponding to the relevant incident form values
   */
  getMedEmergencyIncident(): MedEmergencyIncident {
    return new MedEmergencyIncident( this.latitude, this.longitude );
  }

  /**
   * Returns a vehicle accident incident object with field values
   * corresponding to the relevant incident form values
   */
  getVehicleAccidentIncident(): VehicleAccidentIncident {
    return new VehicleAccidentIncident( this.latitude, this.longitude,
      this.injuries, this.vehicles, this.hazmat, this.entrapment );
  }

  /**
   * Returns a mass casualty incident object with field values
   * corresponding to the relevant incident form values
   */
  getMassCasualtyIncident(): MassCasualtyIncident {
    return new MassCasualtyIncident( this.latitude, this.longitude,
      this.casualties );
  }

  /**
   * Returns a water rescue incident object with field values
   * corresponding to the relevant incident form values
   */
  getWaterRescueIncident(): WaterRescueIncident {
    return new WaterRescueIncident( this.latitude, this.longitude );
  }

  /**
   * Returns a fuel spill incident object with field values
   * corresponding to the relevant incident form values
   */
  getFuelSpillIncident(): FuelSpillIncident {
    return new FuelSpillIncident( this.latitude, this.longitude,
      this.spillSize, this.ignited );
  }
}
