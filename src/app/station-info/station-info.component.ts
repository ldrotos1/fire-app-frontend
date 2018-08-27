import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StationLite } from '../classes/StationLite';
import { Station } from '../classes/Station';
import { Apparatus } from '../classes/apparatus';
import { StationsService } from '../stations.service';
import { MapstateService } from '../mapstate.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit, OnDestroy {

  private stations: StationLite[];
  private selectedStation: Station = null;
  private selectedStationId = '0';
  private stationSelector: FormControl;
  private filteredStations: Observable<StationLite[]>;
  private displayedColumns: string[] = [ 'unitDesignator', 'typeName', 'category' ];

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService ) { }

  ngOnInit() {
    this.getStations();
    this.stationSelector = new FormControl();
    this.mapStateService.selectedStation.subscribe( stationId => {

      this.selectedStationId = stationId;

      // Selects the station if the stations list has been initialized
      if ( this.stations !== undefined ) {

        this._setStationValue( stationId );
      }
    });
  }

  ngOnDestroy() {

    // Clears the station selection
    this.mapStateService.selectStation( '0' );
  }

  /**
   * A function that formats the station station display for
   * the selected station autocomplete
   */
  stationDisplay( station?: StationLite ): string | undefined {

    return station ?
      station.stationDesignator + ' - ' + station.stationName + ' - ' + station.departmentName : undefined;
  }

  /**
   * Gets the basic station information that will popoulate the
   * autocomplete select input.
   */
  getStations(): void {

    this.stationsService.getStations()
      .subscribe( stations => {
        this.stations = stations;

        this.filteredStations = this.stationSelector.valueChanges
          .pipe( startWith(''), map( value => this._filter( value ) ) );

        // If a station has already been selected, load it into the form
        if ( this.selectedStationId !== '0' ) {

          this._setStationValue( this.selectedStationId );
        }
      });
  }

  /**
   * Updates the selected station.
   */
  stationSelected(): void {

    const stat = this.stationSelector.value;

    if ( stat.hasOwnProperty( 'stationId' ) ) {

      // Gets the station information
      this.stationsService.getStation( String( stat[ 'stationId' ] ) )
        .subscribe( station => {
          this.selectedStation = station;

          // Updates the map state
          const stationId = this.selectedStation.stationId.toString();
          this.mapStateService.selectStation( stationId );
        });
    } else {
      this.selectedStation = null;
      this.mapStateService.selectStation( '0' );
    }
  }

  /**
   * Sets the station in the form to the specified
   * station by the station ID value
   */
  private _setStationValue( stationId: string ): void {

    const stat = this.selectedStation;
    if ( stat === null || stat.stationId.toString() !== stationId ) {

      for ( const station of this.stations ) {

        if ( station.stationId.toString() === stationId ) {
          this.stationSelector.setValue( station );
          break;
        }
      }
    }
  }

  /**
   * Updates the values in the autocomplete station select.
   */
  private _filter( value: string ): StationLite[] {

    if ( typeof value === 'string' ) {

      const filterValue = value.toLowerCase();

      return this.stations.filter(
        station => {

          const num = station.stationDesignator.toString();
          const name = station.stationName.toLowerCase();
          const dept = station.departmentName.toLowerCase();

          if ( num.includes( filterValue ) || name.includes( filterValue ) || dept.includes( filterValue ) ) {
            return true;
          }

          return false;
        });
    }
  }
}







