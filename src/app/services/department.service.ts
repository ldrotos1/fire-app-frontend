import { Department } from '../classes/department';
import { DepartmentLite } from '../classes/departmentlite';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departmentsUrl = 'http://localhost:8080/services/rest/information/department/all';
  private departmentUrl = 'http://localhost:8080/services/rest/information/department/byid';

  constructor( private http: HttpClient ) {}

  /**
   * Gets an array of all fire departments.
   */
  getDepartments(): Observable<DepartmentLite[]> {

    return this.http.get<DepartmentLite[]>( this.departmentsUrl );
  }

  /**
   * Gets the specified fire station
   */
  getDepartment( departmentId: string ): Observable<Department> {

    const options = { params: new HttpParams().set( 'id', departmentId ) };
    return this.http.get<Department>( this.departmentUrl, options );
  }
}
