import { NgModule } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StationsService } from '../stations.service';
import { StationMap } from '../classes/StationMap';
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

  constructor( private stationsService: StationsService, private zone: NgZone ) { }

  ngOnInit() {
    this.getMapStations();
  }

  /**
   * Gets the stations and adds them to the map
   */
  getMapStations(): void {

    // Station map marker properties
    const markerOptions = {
      radius: 4,
      color: '#000000',
      weight: 1,
      opacity: 1.0,
      fillColor: '#E60000',
      fillOpacity: 1.0
    };

    this.stationsService.getMapStations()
      .subscribe( stations => {

         this.stations = stations;
         this.stations.map( station => {

           // Creates the station marker
           station.mapMarker = L.circleMarker( L.latLng( station.lat, station.lon ), markerOptions );

           // Sets up the event handlers
           station.mapMarker.on( 'mouseover', () => {
             station.mapMarker.setRadius( 8 );
           });

           station.mapMarker.on( 'mouseout', () => {
             station.mapMarker.setRadius( 4 );
           });

           station.mapMarker.on( 'click', () => {
             this.zone.run(() => {
               console.log( 'Station ' + station.stationName + ' clicked' );
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
}
