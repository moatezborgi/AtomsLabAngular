import {User} from "../UserManagementModels/User";
import {PlanificationDuty} from "./PlanificationDuty";

export interface Reclamation {
  idReclamation: number;
  dateHeureReclamation: Date;
  etatreclam: number;
  descReclamation: string;
  user: User;
  planificationDuty:PlanificationDuty;
}
