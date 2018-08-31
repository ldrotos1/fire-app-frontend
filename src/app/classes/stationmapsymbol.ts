import { StationLite } from './StationLite';
import * as L from 'leaflet';

export class StationMapSymbol extends StationLite {
  mapMarker: L.CircleMarker;
  symbolState: string;
}
