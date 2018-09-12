import { Waypoint } from './waypoint';

export class ReponseRoute {
  stationId: number;
  apparatusIds: Array<number>;
  waypoints: Array<Waypoint>;
}
