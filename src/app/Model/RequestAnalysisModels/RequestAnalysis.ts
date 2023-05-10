import {ActRequestAnalysisSampling} from "./ActRequestAnalysisSampling";
import {Inscription} from "./Inscription";
import {Patient} from "./Patient";
import {Appointment} from "./Appointment";
import {ResultAct} from "./ResultAct";
import {User} from "../UserManagementModels/User";

export interface RequestAnalysis {
  idRequest: string;
  requestStatus: boolean;
  dateRequest: string;
  isUrgent: boolean;
  conclusionofAnalaysis: string;
  appointment: Appointment;
  resultActList: ResultAct[];
  user: User;
  patient: Patient;
  inscription: Inscription;
  actRequestAnalysisSamplingList: ActRequestAnalysisSampling[];
}
