import { NgModule } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StationsService } from '../services/stations.service';
import { StationMapSymbol } from '../classes/StationMapSymbol';
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
  private stations: StationMapSymbol[];
  private selectedStationIds = [];
  private hoveringStation = 0;

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService,
    private symbologyService: SymbologyService,
    private router: Router,
    private zone: NgZone ) { }

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

    this.stationsService.getMapStations()
      .subscribe( stations => {

         this.stations = stations;
         this.stations.map( station => {

           // Creates the station marker
           station.symbolState = 'DEFAULT';
           station.mapMarker = L.circleMarker( L.latLng( station.lat, station.lon ) );
           station.mapMarker.setRadius( 4 );
           station.mapMarker.setStyle( this.symbologyService.getStationSym() );

           // Sets up the mouse-over event handler
           station.mapMarker.on( 'mouseover', () => {

             station.mapMarker.setRadius( 7 );

             switch ( station.symbolState ) {
               case 'DEFAULT':
                 station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
                 break;
               case 'SELECTED':
                 station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
                 break;
               case 'GREYOUT':
                 station.mapMarker.setStyle( this.symbologyService.getGreyOutStationHoverSym() );
                 break;
             }

             this.mapStateService.setHoverStationSym( station.stationId );
           });

           // Sets up the mouse-out event handler
           station.mapMarker.on( 'mouseout', () => {

             switch ( station.symbolState ) {
               case 'DEFAULT':
                 station.mapMarker.setRadius( 4 );
                 station.mapMarker.setStyle( this.symbologyService.getStationSym() );
                 break;
               case 'SELECTED':
                 station.mapMarker.setRadius( 7 );
                 station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
                 break;
               case 'GREYOUT':
                 station.mapMarker.setRadius( 4 );
                 station.mapMarker.setStyle( this.symbologyService.getGreyOutStationSym() );
                 break;
             }

             this.mapStateService.setHoverStationSym( 0 );
           });

           // Sets up the mouse-click event handler
           station.mapMarker.on( 'click', () => {
             this.zone.run(() => {

               if ( this.router.url === '/stations' ) {

                 // Displays the station information in the station info pane
                 const stationIds = [ station.stationId ];
                 this.setSelectedStations( stationIds );
                 this.mapStateService.selectStations( stationIds );
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
   * Selects the stations on the map that whose station
   * IDs are in the collection of IDs
   */
  setSelectedStations( stationIds: Array<number> ): void {

    this.selectedStationIds = stationIds;

    if ( this.stations ) {

      if ( stationIds.length > 0 ) {

        if ( this.router.url === '/stations' ) {

          // Updates the map symbology for the station info view
          for ( const station of this.stations ) {
            if ( station.stationId === stationIds[0] ) {
              station.symbolState = 'SELECTED';
              station.mapMarker.setRadius( 7 );
              station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
            } else {
              station.symbolState = 'DEFAULT';
              station.mapMarker.setRadius( 4 );
              station.mapMarker.setStyle( this.symbologyService.getStationSym() );
            }
          }
        } else {

          // Updates the map symbology for the department and apparatus info views
          for ( const station of this.stations ) {
            if ( stationIds.includes( station.stationId ) || stationIds[ 0 ] === 0 ) {
              station.symbolState = 'DEFAULT';
              station.mapMarker.setRadius( 4 );
              station.mapMarker.setStyle( this.symbologyService.getStationSym() );
            } else {
              station.symbolState = 'GREYOUT';
              station.mapMarker.setRadius( 4 );
              station.mapMarker.setStyle( this.symbologyService.getGreyOutStationSym() );
            }
          }
        }
      } else {

        // Sets all station symbols to the default
        for ( const station of this.stations ) {
          station.symbolState = 'DEFAULT';
          station.mapMarker.setRadius( 4 );
          station.mapMarker.setStyle( this.symbologyService.getStationSym() );
        }
      }
    }
  }

  /**
   * Sets the station that should be symbolized as being hovered over
   */
  setRowHoverStation( stationId: number ): void {

    if ( this.stations !== undefined ) {

      for ( const station of this.stations ) {

        if ( station.stationId === stationId ) {
          station.symbolState = 'SELECTED';
          station.mapMarker.setRadius( 7 );
          station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
        } else if ( this.selectedStationIds.includes( station.stationId ) ) {
          station.symbolState = 'DEFAULT';
          station.mapMarker.setRadius( 4 );
          station.mapMarker.setStyle( this.symbologyService.getStationSym() );
        } else {
          station.symbolState = 'GREYOUT';
          station.mapMarker.setRadius( 4 );
          station.mapMarker.setStyle( this.symbologyService.getGreyOutStationSym() );
        }
      }
    }
  }
}
