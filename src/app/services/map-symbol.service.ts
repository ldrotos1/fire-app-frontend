import { ResponseRoute } from '../classes/response/response-route';
import { RouteMapSymbol } from '../classes/response/route-map-symbol';
import { StationLite } from '../classes/station/StationLite';
import { StationMapSymbol } from '../classes/station/stationmapsymbol';
import { StationDialogComponent } from '../station-dialog/station-dialog.component';
import { MapstateService } from './mapstate.service';
import { SymbologyService } from './symbology.service';
import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapSymbolService {

  constructor(
      private mapStateService: MapstateService,
      private symbologyService: SymbologyService,
      private dialog: MatDialog,
      private router: Router,
      private zone: NgZone ) {}

  /**
   * Creates and returns an incident marker tied to
   * the specified location
   */
  createIncidentMarker( coord: L.LatLng ): L.Marker {

    const incidentMarker = new L.Marker( coord , {
      icon: new L.Icon({
        iconSize: [ 26, 26 ],
        iconAnchor: [ 13, 13 ],
        iconUrl: 'assets/images/incident_icon.png'
      })
    });

    return incidentMarker;
  }

  /**
   * Injests a response route object and creates and returns
   * the corresponding map route polyline.
   */
  createRouteMapSym( responseRoute: ResponseRoute ): RouteMapSymbol {

    const routeSym = new RouteMapSymbol(
      responseRoute.stationId, responseRoute.apparatusIds );

    // Creates the array of coordinates defining the polyline geometry
    const latLng = [];
    for ( const point of responseRoute.waypoints ) {

      const coord = [ point.lat, point.lng ];
      latLng.push( coord );
    }

    // Creates the polyline
    const route = new L.Polyline( latLng, {
      color: '#FF0000',
      weight: 6,
      opacity: 0.4
    });
    routeSym.route = route;

    return routeSym;
  }

  /**
   * Injests a station object and creates and returns the
   * corresponding station map marker symbol.
   */
  createStationMapSym( station: StationLite ): StationMapSymbol {

    const mapStation = new StationMapSymbol( station );
    mapStation.mapMarker = L.circleMarker( L.latLng( station.lat, station.lon ) );
    mapStation.mapMarker.setRadius( 5 );
    mapStation.mapMarker.setStyle( this.symbologyService.getStationSym() );

    // Sets up the mouse-over event handler
    mapStation.mapMarker.on( 'mouseover', () => {

      mapStation.mapMarker.setRadius( 7 );

      switch ( mapStation.symbolState ) {
        case 'DEFAULT':
          mapStation.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
          break;
        case 'SELECTED':
          mapStation.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
          break;
        case 'GREYOUT':
          mapStation.mapMarker.setStyle( this.symbologyService.getGreyOutStationHoverSym() );
          break;
      }

      this.mapStateService.setHoverStationSym( mapStation.stationId );
    });

    // Sets up the mouse-out event handler
    mapStation.mapMarker.on( 'mouseout', () => {

      switch ( mapStation.symbolState ) {
        case 'DEFAULT':
          mapStation.mapMarker.setRadius( 5 );
          mapStation.mapMarker.setStyle( this.symbologyService.getStationSym() );
          break;
        case 'SELECTED':
          mapStation.mapMarker.setRadius( 7 );
          mapStation.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
          break;
        case 'GREYOUT':
          mapStation.mapMarker.setRadius( 5 );
          mapStation.mapMarker.setStyle( this.symbologyService.getGreyOutStationSym() );
          break;
      }

      this.mapStateService.setHoverStationSym( 0 );
    });

    // Sets up the mouse-click event handler
    mapStation.mapMarker.on( 'click', () => {
      this.zone.run(() => {

        if ( this.router.url === '/stations' ) {

          // Displays the station information in the station info pane
          const stationIds = [ mapStation.stationId ];
          this.mapStateService.selectStations( stationIds );
        } else {

          // Displays the station information in a dialog
          this.dialog.open( StationDialogComponent, {
            height: '550px',
            width: '600px',
            data: { stationId: mapStation.stationId }
          });
        }
      });
    });

    // Adds the station name tooltip
    const tooltipTxt = station.stationDesignator + ' - ' + station.stationName + ' / ' + station.deptAbbreviation;
    mapStation.mapMarker.bindTooltip( tooltipTxt, { offset: new L.Point( 9, 0 ), direction: 'right' });

    return mapStation;
  }

  /**
   * Sets all stations to the default symbology state
   */
  clearStationSelections( stations: Array<StationMapSymbol> ): void {

    for ( const station of stations ) {
      station.symbolState = 'DEFAULT';
      station.baseSymbolState = 'DEFAULT';
      station.mapMarker.setRadius( 5 );
      station.mapMarker.setStyle( this.symbologyService.getStationSym() );
    }
  }

  /**
   * Sets a single station symbol to yellow. Sets all other
   * stations symbols to red
   */
  singleStationSelction( stationId: number, stations: Array<StationMapSymbol> ): void {

    for ( const station of stations ) {
      if ( station.stationId === stationId ) {
        station.symbolState = 'SELECTED';
        station.baseSymbolState = 'SELECTED';
        station.mapMarker.setRadius( 7 );
        station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
      } else {
        station.symbolState = 'DEFAULT';
        station.baseSymbolState = 'DEFAULT';
        station.mapMarker.setRadius( 5 );
        station.mapMarker.setStyle( this.symbologyService.getStationSym() );
      }
    }
  }

  /**
   * Sets a group of stations symbols to red. Sets all other
   * stations symbols to grey
   */
  groupStationSelection( stationIds: Array<number>, stations: Array<StationMapSymbol> ): void {

    for ( const station of stations ) {
      if ( stationIds.includes( station.stationId ) ) {
        station.symbolState = 'DEFAULT';
        station.baseSymbolState = 'DEFAULT';
        station.mapMarker.setRadius( 5 );
        station.mapMarker.setStyle( this.symbologyService.getStationSym() );
      } else {
        station.symbolState = 'GREYOUT';
        station.baseSymbolState = 'GREYOUT';
        station.mapMarker.setRadius( 5 );
        station.mapMarker.setStyle( this.symbologyService.getGreyOutStationSym() );
      }
    }
  }

  /**
   * Sets a single station as be highlighted and sets its
   * symbol color to yellow. All other stations are set as
   * not highlighted
   */
  highlightSingleStation( stationId: number, stations: Array<StationMapSymbol> ): void {

    for ( const station of stations ) {

      if ( station.stationId === stationId ) {

        // Set symbol to highlighted state
        station.symbolState = 'SELECTED';
        station.mapMarker.setRadius( 7 );
        station.mapMarker.setStyle( this.symbologyService.getSelectedStationSym() );
      } else {

        if ( station.symbolState !== station.baseSymbolState ) {

          // Set symbol to unhighlighted state
          if ( station.baseSymbolState === 'DEFAULT' ) {
            station.symbolState = 'DEFAULT';
            station.mapMarker.setRadius( 5 );
            station.mapMarker.setStyle( this.symbologyService.getStationSym() );
          } else if ( station.baseSymbolState === 'GREYOUT') {
            station.symbolState = 'GREYOUT';
            station.mapMarker.setRadius( 5 );
            station.mapMarker.setStyle( this.symbologyService.getGreyOutStationSym() );
          }
        }
      }
    }
  }
}
