import { NgModule } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StationsService } from '../services/stations.service';
import { StationMap } from '../classes/StationMap';
import { MapstateService } from '../services/mapstate.service';
import { SymbologyService } from '../services/symbology.service';
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
  private stations: StationMap[];
  private selectedStationId = '0';

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService,
    private symbologyService: SymbologyService,
    private router: Router,
    private zone: NgZone ) { }

  ngOnInit() {
    this.getMapStations();
    this.mapStateService.selectedStation.subscribe( stationId => this.setSelectedStation( stationId ) );
  }

  /**
   * Gets the stations and adds them to the map
   */
  getMapStations(): void {

    this.stationsService.getMapStations()
      .subscribe( stations => {

         this.stations = stations;
         this.stations.map( station => {

           // Creates the station marker
           station.mapMarker = L.circleMarker( L.latLng( station.lat, station.lon ) );
           station.mapMarker.setRadius( 4 );
           station.mapMarker.setStyle( this.symbologyService.getStationSym() );

           // Sets up the event handlers
           station.mapMarker.on( 'mouseover', () => {
             station.mapMarker.setRadius( 7 );

             if ( this.selectedStationId === station.stationId.toString() ) {
               station.mapMarker.setStyle( this.symbologyService.getSelectedStationHoverSym() );
             } else {
               station.mapMarker.setStyle( this.symbologyService.getStationHoverSym() );
             }
           });

           station.mapMarker.on( 'mouseout', () => {

             if ( this.selectedStationId === station.stationId.toString() ) {
               station.mapMarker.setRadius( 7 );
               station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
             } else {
               station.mapMarker.setRadius( 4 );
               station.mapMarker.setStyle( this.symbologyService.getStationSym() );
             }
           });

           station.mapMarker.on( 'click', () => {
             this.zone.run(() => {
               this.setSelectedStation( station.stationId.toString() );

               // Navigates to the station guide if it is the active view
               if ( this.router.url !== 'stations' ) {
                 this.router.navigate( [ 'stations' ] );
                 this.mapStateService.selectStation( station.stationId.toString() );
               } else {
                 this.mapStateService.selectStation( station.stationId.toString() );
               }
             });
           });

           // Adds the station name tooltip
           const tooltipTxt = station.stationDesignator + ' - ' + station.stationName + ' / ' + station.deptAbbreviation;
           station.mapMarker.bindTooltip( tooltipTxt, { offset: new L.Point( 9, 0 ), direction: 'right' });

           // Adds the station marker to the map
           this.mapLayers.push( station.mapMarker );
         });
      });
  }

  /**
   * Sets the selected station on the map
   */
  setSelectedStation( stationId: string ): void {

    if ( this.selectedStationId !== stationId ) {

      this.selectedStationId = stationId;

      // Updates the map symbology
      for ( const station of this.stations ) {

        if ( station.stationId.toString() === stationId ) {
          station.mapMarker.setRadius( 7 );
          station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
        } else {
          station.mapMarker.setRadius( 4 );
          station.mapMarker.setStyle( this.symbologyService.getStationSym() );
        }
      }
    }
  }
}
