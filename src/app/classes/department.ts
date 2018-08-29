import { DepartmentStation } from './departmentstation';
import { map } from 'rxjs/operators';

export class Department {
  departmentId: number;
  departmentName: string;
  chief: string;
  personnel: number;
  address: string;
  city: string;
  zip: string;
  phone: string;
  stations: DepartmentStation[];
  units: Map<string, number>;
}
