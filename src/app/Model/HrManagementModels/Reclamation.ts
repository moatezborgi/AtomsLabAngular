import {User} from "../UserManagementModels/User";
import {PlanificationDuty} from "./PlanificationDuty";

export interface Reclamation {
  idReclamation: number;
  DateHeureReclamation: Date;
  etatreclam: number;
  descReclamation: string;
  user: User;
  planificationDuty:PlanificationDuty;
}
