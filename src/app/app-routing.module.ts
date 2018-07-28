import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { StationInfoComponent } from './station-info/station-info.component';
import { ApparatusInfoComponent } from './apparatus-info/apparatus-info.component';
import { IncidentComponent } from './incident/incident.component';

const routes: Routes = [
  { path: '', redirectTo: '/userguide', pathMatch: 'full' },
  { path: 'userguide', component: UserGuideComponent },
  { path: 'departments', component: DepartmentInfoComponent },
  { path: 'stations', component: StationInfoComponent },
  { path: 'apparatus', component: ApparatusInfoComponent },
  { path: 'incident', component: IncidentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
