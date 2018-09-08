import { Station } from '../../classes/station/Station';
import { StationLite } from '../../classes/station/StationLite';
import { MapstateService } from '../../services/mapstate.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-station-autocomplete',
  templateUrl: './station-autocomplete.component.html',
  styleUrls: ['./station-autocomplete.component.css']
})
export class StationAutocompleteComponent implements OnInit {

  @Input() stations: StationLite[];
  @Output() stationSelected = new EventEmitter<number>();

  private selectedStationId = 0;
  private stationSelector: FormControl;
  private filteredStations: Observable<StationLite[]>;

  constructor( private mapStateService: MapstateService ) { }

  ngOnInit() {

    this.stationSelector = new FormControl();
    this.mapStateService.selectedStations
      .subscribe( stationIds => this._setStationValue( stationIds[0] ));

    this.filteredStations = this.stationSelector.valueChanges
          .pipe( startWith(''), map( value => this._filter( value ) ) );
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
   * Updates the selected station.
   */
  valueSelected(): void {

    const stat = this.stationSelector.value;

    // Updates the map state and fires the station selected event
    if ( stat.hasOwnProperty( 'stationId' ) ) {
      this.stationSelected.emit( stat[ 'stationId' ] );
    } else {
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
          this.stationSelected.emit( stationId );
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
