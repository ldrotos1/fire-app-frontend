import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StationLite } from '../classes/StationLite';
import { Station } from '../classes/Station';
import { Apparatus } from '../classes/apparatus';
import { StationsService } from '../stations.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit {

  private stations: StationLite[];
  private selectedStation: Station;
  private stationSelector: FormControl;
  private filteredStations: Observable<StationLite[]>;
  private displayedColumns: string[] = [ 'unitDesignator', 'typeName', 'category' ];

  constructor( private stationsService: StationsService ) { }

  ngOnInit() {

    this.getStations();
    this.stationSelector = new FormControl();
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
          .pipe( startWith(''), map(value => this._filter(value)) );
      });
  }

  /**
   * Updates the selected station.
   */
  stationSelected(): void {

    const stat = this.stationSelector.value;

    if ( stat.hasOwnProperty( 'stationId' ) ) {

      this.stationsService.getStation( String( stat[ 'stationId' ] ) )
        .subscribe( station => this.selectedStation = station );

    } else {
      this.selectedStation = null;
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







