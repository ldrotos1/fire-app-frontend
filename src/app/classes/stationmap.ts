import { StationLite } from './StationLite';
import * as L from 'leaflet';

export class StationMap extends StationLite {
  mapMarker: L.CircleMarker;
}
