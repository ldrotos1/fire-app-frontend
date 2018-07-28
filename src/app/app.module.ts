import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { StationInfoComponent } from './station-info/station-info.component';
import { ApparatusInfoComponent } from './apparatus-info/apparatus-info.component';
import { IncidentComponent } from './incident/incident.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    UserGuideComponent,
    DepartmentInfoComponent,
    StationInfoComponent,
    ApparatusInfoComponent,
    IncidentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
