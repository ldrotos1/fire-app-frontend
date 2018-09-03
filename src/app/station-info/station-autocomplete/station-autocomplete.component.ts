import { Station } from '../../classes/Station';
import { StationLite } from '../../classes/StationLite';
import { MapstateService } from '../../services/mapstate.service';
import { StationsService } from '../../services/stations.service';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-station-autocomplete',
  templateUrl: './station-autocomplete.component.html',
  styleUrls: ['./station-autocomplete.component.css']
})
export class StationAutocompleteComponent implements OnInit, OnDestroy {

  @Output() stationSelected = new EventEmitter<number>();

  private stations: StationLite[];
  private selectedStationId = 0;
  private stationSelector: FormControl;
  private filteredStations: Observable<StationLite[]>;

  constructor(
    private stationsService: StationsService,
    private mapStateService: MapstateService ) { }

  ngOnInit() {
    this.getStations();
    this.stationSelector = new FormControl();
    this.mapStateService.selectedStation.subscribe( stationId => {

      // Selects the station if the stations list has been initialized
      if ( this.stations !== undefined ) {

        this._setStationValue( stationId );
      }
    });
  }

  ngOnDestroy() {

    // Clears the station selection
    this.mapStateService.selectStation( 0 );
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
        if ( this.selectedStationId !== 0 ) {

          this._setStationValue( this.selectedStationId );
        }
      });
  }

  /**
   * Updates the selected station.
   */
  valueSelected(): void {

    const stat = this.stationSelector.value;

    // Updates the map state and fires station selected even
    if ( stat.hasOwnProperty( 'stationId' ) ) {
      this.mapStateService.selectStation( stat[ 'stationId' ] );
      this.stationSelected.emit( stat[ 'stationId' ] );
    } else {
      this.mapStateService.selectStation( 0 );
      this.stationSelected.emit( 0 );
    }
  }

  /**
   * Sets the station in the form to the specified
   * station by the station ID value
   */
  private _setStationValue( stationId: number ): void {

    if ( this.selectedStationId === null || this.selectedStationId !== stationId ) {

      this.selectedStationId = stationId;

      for ( const station of this.stations ) {

        if ( station.stationId === stationId ) {
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
