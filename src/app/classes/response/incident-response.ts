import { ReponseRoute } from './reponse-route';
import { RespondingApparatus } from './responding-apparatus';

export class IncidentResponse {
  incidentTitle: string;
  respondingApparatus: Array<RespondingApparatus>;
  reponseRoutes: Array<ReponseRoute>;
}

