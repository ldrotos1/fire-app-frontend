export class UnitTypeCount {
  unitType: string;
  unitCategory: string;
  unitCount: number;

  constructor( unitType: string, unitCategory: string ) {
    this.unitType = unitType;
    this.unitCategory = unitCategory;
    this.unitCount = 1;
  }
}
