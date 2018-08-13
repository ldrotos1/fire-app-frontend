import { Apparatus } from './apparatus';

export class Station {
  stationId: number;
  stationNumber: number;
  stationDesignator: number;
  stationName: string;
  departmentName: string;
  deptAbbreviation: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  isVolunteer: boolean;
  lat: number;
  lon: number;
  apparatus: Apparatus[];
}
