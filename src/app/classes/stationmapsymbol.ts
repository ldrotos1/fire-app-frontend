import { StationLite } from './StationLite';
import * as L from 'leaflet';

export class StationMapSymbol extends StationLite {
  mapMarker: L.CircleMarker;
  symbolState: string;
  baseSymbolState: string;

  constructor( station: StationLite ) {
    super( station );
    this.mapMarker = undefined;
    this.symbolState = 'DEFAULT';
    this.baseSymbolState = 'DEFAULT';
  }
}
