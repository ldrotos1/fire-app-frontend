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
  unitCount: number;
  stations: DepartmentStation[];
  unitTypeMap: Map<string, number>;
}
