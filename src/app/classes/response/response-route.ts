import { Waypoint } from './waypoint';

export class ResponseRoute {
  stationId: number;
  apparatusIds: Array<number>;
  waypoints: Array<Waypoint>;
}
