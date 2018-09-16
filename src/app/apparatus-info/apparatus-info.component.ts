import { ApparatusType } from '../classes/apparatus/apparatustype';
import { ApparatusTypeLite } from '../classes/apparatus/apparatustypelite';
import { ChartData } from '../classes/charts/chartdata';
import { ApparatusService } from '../services/apparatus.service';
import { ChartDataService } from '../services/chart-data.service';
import { MapstateService } from '../services/mapstate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-apparatus-info',
  templateUrl: './apparatus-info.component.html',
  styleUrls: ['./apparatus-info.component.css']
})
export class ApparatusInfoComponent implements OnInit, OnDestroy {

  private title = 'Apparatus Type Information';
  private icon = 'local_taxi';
  private apparatusType: ApparatusType;
  private apparatusTypes: ApparatusTypeLite[];
  private chartData: ChartData;

  constructor(
    private apparatusService: ApparatusService,
    private chartDataService: ChartDataService,
    private mapstateService: MapstateService ) { }

  // Gets the apparatus types
  ngOnInit() {
    this.getApparatusTypes();
  }

  // Clears the selected stations on the map
  ngOnDestroy() {
    this.mapstateService.selectStations( [] );
  }

  /**
   * Gets the basic station information that will popoulate the
   * autocomplete select input.
   */
  getApparatusTypes(): void {

    this.apparatusService.getApparatusTypes()
      .subscribe( apparatusTypes => this.apparatusTypes = apparatusTypes );
  }

  /**
   * Gets the apparatus type information for the specified
   * apparatus type
   */
  onApparatusTypeSelected( typeId: number ): void {

    this.apparatusType = null;
    this.chartData = null;

    if ( typeId > 0 ) {
      this.apparatusService.getApparatusType( typeId.toString() )
        .subscribe( apparatusType => {

          // Sets the appartus type object
          this.apparatusType = apparatusType;
          this.chartData = this.chartDataService.getDeptUnitTypeChartData( apparatusType );

          // Updates the selected stations on the map
          this.mapstateService.selectStations( this.apparatusType.stationList );
        });
    }
  }
}
