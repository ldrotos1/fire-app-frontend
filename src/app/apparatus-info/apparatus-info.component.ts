import { ApparatusType } from '../classes/apparatustype';
import { ApparatusTypeLite } from '../classes/apparatustypelite';
import { ChartData } from '../classes/chartdata';
import { ApparatusService } from '../services/apparatus.service';
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

    if ( typeId === 0 ) {
      this.apparatusType = null;
    } else {
      this.apparatusService.getApparatusType( typeId.toString() )
        .subscribe( apparatusType => {

          // Sets the appartus type object
          this.apparatusType = apparatusType;

          // Updates the selected stations on the map
          this.mapstateService.selectStations( this.apparatusType.stationList );

          // Creates the chart data object
          const chartDataPoints = new Array<number>();
          chartDataPoints.push( apparatusType.departMap[ 4 ] );
          chartDataPoints.push( apparatusType.departMap[ 1 ] );
          chartDataPoints.push( apparatusType.departMap[ 3 ] );
          chartDataPoints.push( apparatusType.departMap[ 7 ] );
          chartDataPoints.push( apparatusType.departMap[ 5 ] );
          chartDataPoints.push( apparatusType.departMap[ 2 ] );
          chartDataPoints.push( apparatusType.departMap[ 6 ] );

          const chartDataset = new ChartData();
          chartDataset.dataPoints = chartDataPoints;
          chartDataset.label = apparatusType.typeName + ' Count';
          chartDataset.dataLabels = [
            'Fairfax County',
            'Arlington County',
            'Alexandria City',
            'M.W. Airports Authority',
            'Fort Belvoir',
            'Fairfax City',
            'Fort Myer'
          ];

          this.chartData = chartDataset;
        });
    }
  }
}
