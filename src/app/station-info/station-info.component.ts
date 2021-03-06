import { Component, OnInit, OnDestroy } from '@angular/core';
import { StationLite } from '../classes/station/StationLite';
import { Station } from '../classes/station/Station';
import { Apparatus } from '../classes/apparatus/apparatus';
import { MapstateService } from '../services/mapstate.service';
import { StationsService } from '../services/stations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit, OnDestroy {

  title = 'Fire Station Information';
  icon = 'store_mall_directory';
  station: Station;
  stations: StationLite[];

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
    this.mapStateService.selectStations( [] );
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

    const stationIds = [ stationId ];
    this.mapStateService.selectStations( stationIds );

    if ( stationId === 0) {
      this.station = null;
    } else {
      this.stationsService.getStation( stationId )
        .subscribe( station => this.station = station );
    }
  }
}







