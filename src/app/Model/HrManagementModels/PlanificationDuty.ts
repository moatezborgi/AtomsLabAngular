import {User} from "../UserManagementModels/User";
import {Duty} from "./Duty";
import {Reclamation} from "./Reclamation";

export interface PlanificationDuty {
  idPlanificationDuty: number;
  datePlanification: Date;
  user: User;
  isActive: boolean;
  duty: Duty;
  // reclamationList:Reclamation[];
}
