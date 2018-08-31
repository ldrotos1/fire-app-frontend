import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { StationInfoComponent } from './station-info/station-info.component';
import { ApparatusInfoComponent } from './apparatus-info/apparatus-info.component';
import { IncidentComponent } from './incident/incident.component';
import { AppRoutingModule } from './/app-routing.module';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { DepartmentSelectorComponent } from './department-info/department-selector/department-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    UserGuideComponent,
    DepartmentInfoComponent,
    StationInfoComponent,
    ApparatusInfoComponent,
    IncidentComponent,
    SubHeaderComponent,
    DepartmentSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
