import { ResponseRoute } from './response-route';
import { RespondingApparatus } from './responding-apparatus';

export class IncidentResponse {
  incidentTitle: string;
  respondingApparatus: Array<RespondingApparatus>;
  reponseRoutes: Array<ResponseRoute>;
}

