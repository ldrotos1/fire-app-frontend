import { Department } from '../classes/department/department';
import { DepartmentLite } from '../classes/department/departmentlite';
import { WebPropertiesService } from './web-properties.service';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient,
    private webProps: WebPropertiesService ) {}

  /**
   * Gets an array of all fire departments.
   */
  getDepartments(): Observable<DepartmentLite[]> {

    return this.http.get<DepartmentLite[]>( this.webProps.getDepartmentsUrl() );
  }

  /**
   * Gets the specified fire station
   */
  getDepartment( departmentId: string ): Observable<Department> {

    const options = { params: new HttpParams().set( 'id', departmentId ) };
    return this.http.get<Department>( this.webProps.getDepartmentUrl(), options );
  }
}
