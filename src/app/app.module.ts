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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { ChartsModule } from 'ng2-charts';

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
import { DepartmentViewComponent } from './department-info/department-view/department-view.component';
import { UnitTypeChartComponent } from './department-info/department-view/unit-type-chart/unit-type-chart.component';
import { StationListComponent } from './department-info/department-view/station-list/station-list.component';
import { StationAutocompleteComponent } from './station-info/station-autocomplete/station-autocomplete.component';
import { StationViewComponent } from './station-info/station-view/station-view.component';
import { ApparatusAutocompleteComponent } from './apparatus-info/apparatus-autocomplete/apparatus-autocomplete.component';
import { ApparatusViewComponent } from './apparatus-info/apparatus-view/apparatus-view.component';
import { ApparatusDeptChartComponent } from './apparatus-info/apparatus-view/apparatus-dept-chart/apparatus-dept-chart.component';
import { IncidentBuilderComponent } from './incident/incident-builder/incident-builder.component';
import { IncidentTypeSelectorComponent } from './incident/incident-builder/incident-type-selector/incident-type-selector.component';
import { StructureFireFormComponent } from './incident/incident-builder/structure-fire-form/structure-fire-form.component';
import { VehicleAccidentFormComponent } from './incident/incident-builder/vehicle-accident-form/vehicle-accident-form.component';
import { MassCasualtyFormComponent } from './incident/incident-builder/mass-casualty-form/mass-casualty-form.component';
import { FuelSpillFormComponent } from './incident/incident-builder/fuel-spill-form/fuel-spill-form.component';
import { IncidentResponseComponent } from './incident/incident-response/incident-response.component';
import { SecondsToMinutesPipe } from './pipes/seconds-to-minutes.pipe';
import { StationDialogComponent } from './station-dialog/station-dialog.component';
import { IncidentResponseTableComponent } from './incident/incident-response/incident-response-table/incident-response-table.component';

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
    DepartmentSelectorComponent,
    DepartmentViewComponent,
    UnitTypeChartComponent,
    StationListComponent,
    StationAutocompleteComponent,
    StationViewComponent,
    ApparatusAutocompleteComponent,
    ApparatusViewComponent,
    ApparatusDeptChartComponent,
    IncidentBuilderComponent,
    IncidentTypeSelectorComponent,
    StructureFireFormComponent,
    VehicleAccidentFormComponent,
    MassCasualtyFormComponent,
    FuelSpillFormComponent,
    IncidentResponseComponent,
    SecondsToMinutesPipe,
    StationDialogComponent,
    IncidentResponseTableComponent,
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
    MatTooltipModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatSortModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StationDialogComponent],
})
export class AppModule { }
