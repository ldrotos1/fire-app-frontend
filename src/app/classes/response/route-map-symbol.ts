import * as L from 'leaflet';

export class RouteMapSymbol {
  stationId: number;
  apparatusIds: Array<number>;
  highlighted: boolean;
  route: L.Polyline;

  constructor( stationId: number, unitIds: Array<number> ) {
    this.stationId = stationId;
    this.apparatusIds = unitIds;
    this.highlighted = false;
    this.route = undefined;
  }
}
