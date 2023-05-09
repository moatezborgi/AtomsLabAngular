import {User} from "../UserManagementModels/User";
import {Appointment} from "./Appointment";
import {RequestAnalysis} from "./RequestAnalysis";

export interface Inscription {
  num_insc: string;
  date_insc: string;
  user: User;
  appointment: Appointment;
  requestAnalysis: RequestAnalysis;
}
