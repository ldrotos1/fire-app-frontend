import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StationsService } from '../services/stations.service';
import { StationMapSymbol } from '../classes/station/StationMapSymbol';
import { MapstateService } from '../services/mapstate.service';
import { StationSymbologyService } from '../services/station-symbology.service';
import * as L from 'leaflet';

@NgModule({
  imports: [
    LeafletModule
  ]
})

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private baseMapUrl = 'https://api.mapbox.com/styles/v1/ldrotos/cjk7ejowm5htm2rl579r0etey/tiles/256/{z}/{x}/{y}';
  private baseMapToken = 'pk.eyJ1IjoibGRyb3RvcyIsImEiOiJwQXgwZ2ZVIn0.pPrIMXZdwniJcp79DNpg9g';
  private baseMapAccess = this.baseMapUrl + '?access_token=' + this.baseMapToken;

  private mapOptions = {
    layers: [ L.tileLayer( this.baseMapAccess, { maxZoom: 18, attribution: '...' })],
    zoom: 10,
    center: L.latLng(38.8613, -77.2457)
  };

  private mapLayers = [];
  private stations: StationMapSymbol[];

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService,
    private stationSymService: StationSymbologyService,
    private router: Router ) {

      this.stations = new Array<StationMapSymbol>();
  }

  ngOnInit() {
    this.getMapStations();

    this.mapStateService.selectedStations.subscribe( stationIds => {
      this.setSelectedStations( stationIds );
    });

    this.mapStateService.currentRowHoverStation.subscribe( stationId => {
      this.setRowHoverStation( stationId );
    });
  }

  /**
   * Gets the stations and adds them to the map
   */
  getMapStations(): void {

    this.stationsService.getStations().subscribe( stations => {
      for ( const station of stations ) {

        // Creates the station marker
        const mapStation = this.stationSymService.createStationMapSym( station );

        // Adds the station marker to the map
        this.stations.push( mapStation );
        this.mapLayers.push( mapStation.mapMarker );
      }
    });
  }

  /**
   * Selects the stations on the map that whose station
   * IDs are in the collection of IDs
   */
  setSelectedStations( stationIds: Array<number> ): void {
    if ( this.stations ) {

      if ( stationIds.length === 0 ) {
        this.stationSymService.clearStationSelections( this.stations );
      } else if ( this.router.url === '/stations' ) {
        this.stationSymService.singleStationSelction( stationIds[0], this.stations );
      } else {
        this.stationSymService.groupStationSelection( stationIds, this.stations );
      }
    }
  }

  /**
   * Sets the station that should be symbolized as being
   * hovered over
   */
  setRowHoverStation( stationId: number ): void {
    if ( this.stations ) {
      this.stationSymService.highlightSingleStation( stationId, this.stations );
    }
  }
}
