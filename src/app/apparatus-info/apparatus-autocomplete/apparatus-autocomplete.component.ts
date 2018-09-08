import { ApparatusTypeLite } from '../../classes/apparatus/apparatustypelite';
import { MapstateService } from '../../services/mapstate.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-apparatus-autocomplete',
  templateUrl: './apparatus-autocomplete.component.html',
  styleUrls: ['./apparatus-autocomplete.component.css']
})
export class ApparatusAutocompleteComponent implements OnInit {

  @Input() apparatusTypes: ApparatusTypeLite[];
  @Output() apparatusTypeSelected = new EventEmitter<number>();

  private typeSelector: FormControl;
  private filteredTypes: Observable<ApparatusTypeLite[]>;

  constructor() { }

  ngOnInit() {
    this.typeSelector = new FormControl();
    this.filteredTypes = this.typeSelector.valueChanges
          .pipe( startWith(''), map( value => this._filter( value ) ) );
  }

  /**
   * Updates the selected apparatus type.
   */
  valueSelected(): void {

    const appType = this.typeSelector.value;

    // Fires the apparatus type selected event
    if ( appType.hasOwnProperty( 'apparatusTypeId' ) ) {

      this.apparatusTypeSelected.emit( appType[ 'apparatusTypeId' ] );
    } else {

      this.apparatusTypeSelected.emit( 0 );
    }
  }

  /**
   * A function that formats the selected apparatus type display
   * for the autocomplete
   */
  typeDisplay( appType?: ApparatusTypeLite ): string | undefined {

    return appType ? appType.typeName + ' - ' + appType.category : undefined;
  }

  /**
   * Updates the values in the autocomplete apparatus type select.
   */
  private _filter( value: string ): ApparatusTypeLite[] {

    if ( typeof value === 'string' ) {

      const filterValue = value.toLowerCase();

      return this.apparatusTypes.filter(
        apparatusType => {

          const name = apparatusType.typeName.toLowerCase();
          const category = apparatusType.category.toLowerCase();

          if ( name.includes( filterValue ) || category.includes( filterValue ) ) {

            return true;
          }

          return false;
        });
    }
  }
}
