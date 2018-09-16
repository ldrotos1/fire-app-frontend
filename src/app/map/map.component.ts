import { ResponseRoute } from '../classes/response/response-route';
import { RouteMapSymbol } from '../classes/response/route-map-symbol';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StationsService } from '../services/stations.service';
import { StationMapSymbol } from '../classes/station/StationMapSymbol';
import { CrosshairViewService } from '../services/crosshair-view.service';
import { MapstateService } from '../services/mapstate.service';
import { MapSymbolService } from '../services/map-symbol.service';
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
  private isCrosshairActive = false;

  private mapOptions = {
    layers: [ L.tileLayer( this.baseMapAccess, {})],
    zoom: 10,
    minZoom: 9,
    center: L.latLng(38.8613, -77.3457),
    maxBounds: [[37.574669, -78.755987],
                [40.104280, -75.704703]],
    bounceAtZoomLimits: false
  };

  private mapLayers = [];
  private stations: StationMapSymbol[];
  private incidentMarker: L.Marker;
  private routes: RouteMapSymbol[];

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService,
    private mapSymService: MapSymbolService,
    private crosshairService: CrosshairViewService,
    private router: Router ) {

      this.stations = new Array<StationMapSymbol>();
      this.routes = new Array<RouteMapSymbol>();
  }

  ngOnInit() {
    this.getMapStations();

    // Watches for changes in the station selection set
    this.mapStateService.watchSelectedStations.subscribe(
      stationIds => this.setSelectedStations( stationIds ) );

    // Watches for changes in the station row hover state
    this.mapStateService.watchRowHoverStation.subscribe(
      stationId => this.setRowHoverStation( stationId ) );

    // Watches for changes in the response routes
    this.mapStateService.watchResponseRoutes.subscribe(
      routes => this.updateRoutes( routes ) );

    // Watches for changes in the crosshair cursor state
    this.crosshairService.watchCrosshairState.subscribe(
      state => this.isCrosshairActive = state );
  }

  /**
   * Gets the stations and adds them to the map
   */
  getMapStations(): void {

    this.stationsService.getStations().subscribe( stations => {
      for ( const station of stations ) {

        // Creates the station marker
        const mapStation = this.mapSymService.createStationMapSym( station );

        // Adds the station marker to the map
        this.stations.push( mapStation );
        this.mapLayers.push( mapStation.mapMarker );
      }
    });
  }

  updateRoutes( routes: Array<ResponseRoute> ) {

    if ( routes.length === 0 ) {

      // Routes are empty. Clear previous incident
      this.clearIncidentLocation();
      this.clearRoutes();
    } else {

      // Updates routes with new set
      this.clearRoutes();
      this.routes = [];

      for ( const route of routes ) {
        const routeSym = this.mapSymService.createRouteMapSym( route );
        this.routes.push( routeSym );
        this.mapLayers.push( routeSym.route );
      }
    }
  }

  /**
   * Publishes the map click event location and creates the
   * incident location marker.
   */
  mapClicked( event ): void {

    // Creates the incident marker if the selection tool is active
    if ( this.isCrosshairActive === true ) {

      this.clearIncidentLocation();
      this.incidentMarker = this.mapSymService.createIncidentMarker( event.latlng );
      this.mapLayers.push( this.incidentMarker );
    }

    // Publishes the incident location to the map click service
    this.mapStateService.setMapClickPosition( event.latlng );
  }

  /**
   * Clears the incident location from the map
   */
  clearIncidentLocation(): void {
    if ( this.incidentMarker !== undefined ) {
        this.incidentMarker.remove();
      }
  }

  /**
   * Clears the routes from the map
   */
  clearRoutes(): void {
    for ( const route of this.routes ) {
      route.route.remove();
    }
  }

  /**
   * Selects the stations on the map that whose station
   * IDs are in the collection of IDs
   */
  setSelectedStations( stationIds: Array<number> ): void {
    if ( this.stations ) {

      if ( stationIds.length === 0 ) {
        this.mapSymService.clearStationSelections( this.stations );
      } else if ( this.router.url === '/stations' ) {
        this.mapSymService.singleStationSelction( stationIds[0], this.stations );
      } else {
        this.mapSymService.groupStationSelection( stationIds, this.stations );
      }
    }
  }

  /**
   * Sets the station that should be symbolized as being
   * hovered over
   */
  setRowHoverStation( stationId: number ): void {
    if ( this.stations ) {
      this.mapSymService.highlightSingleStation( stationId, this.stations );
    }
  }
}
