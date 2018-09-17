import { RespondingApparatus } from '../response/responding-apparatus';
import { UnitTypeCount } from './unit-type-count';

export class UnitTypeCountList {
  unitTypeCountList: Array<UnitTypeCount>;

  public constructor() {
    this.unitTypeCountList = new Array<UnitTypeCount>();
  }

  /**
   * Adds the apparatus to the list
   */
  public addUnit( unit: RespondingApparatus ): void {

    let found = false;

    for ( const unitTypeCount of this.unitTypeCountList ) {
      if ( unitTypeCount.unitType === unit.typeName ) {
        unitTypeCount.unitCount++;
        found = true;
        break;
      }
    }

    if ( !found ) {
      this.unitTypeCountList.push( new UnitTypeCount( unit.typeName, unit.category ) );
    }
  }

  /**
   * Returns the list sorted by unit type count in
   * decending order
   */
  public getSortedList() {
    return this.unitTypeCountList.sort( ( x, y ) => {
      if ( x.unitCount < y.unitCount ) {
        return 1;
      } else if ( x.unitCount > y.unitCount ) {
        return -1;
      } else {
        if ( x.unitCategory === 'Aerial Support' ) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }
}
