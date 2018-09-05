import { Component, OnInit, OnDestroy } from '@angular/core';
import { StationLite } from '../classes/StationLite';
import { Station } from '../classes/Station';
import { Apparatus } from '../classes/apparatus';
import { MapstateService } from '../services/mapstate.service';
import { StationsService } from '../services/stations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit, OnDestroy {

  private title = 'Fire Station Information';
  private icon = 'store_mall_directory';
  private station: Station;
  private stations: StationLite[];

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService ) { }

  /**
   * Gets the station list
   */
  ngOnInit() {
    this.getStations();
  }

  /**
   * Clears the station selection on the map
   */
  ngOnDestroy() {
    this.mapStateService.selectStation( 0 );
  }

  /**
   * Gets the basic station information that will popoulate the
   * autocomplete select input.
   */
  getStations(): void {

    this.stationsService.getStations()
      .subscribe( stations => this.stations = stations );
  }

  /**
   * Gets the station information for the newly selected
   * station and updates the station selection on the map.
   */
  onStationSelected( stationId ) {

    this.mapStateService.selectStation( stationId );

    if ( stationId === 0) {
      this.station = null;
    } else {
      this.stationsService.getStation( stationId )
        .subscribe( station => this.station = station );
    }
  }
}







