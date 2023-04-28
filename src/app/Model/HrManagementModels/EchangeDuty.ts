import {User} from "../UserManagementModels/User";
import {Duty} from "./Duty";

export interface EchangeDuty {
  idEchangeDuty: number;
  dateHeure: Date;
  user: User;
  usertochange: User;
  isActive: boolean;
  duty: Duty;
}
