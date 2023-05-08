import {User} from "../UserManagementModels/User";
import {Duty} from "./Duty";
import {Reclamation} from "./Reclamation";

export interface PlanificationDuty {
  idPlanificationDuty: number;
  dateplanification: Date;
  user: User;
  isActive: boolean;
  duty: Duty;
  // reclamationList:Reclamation[];
}
