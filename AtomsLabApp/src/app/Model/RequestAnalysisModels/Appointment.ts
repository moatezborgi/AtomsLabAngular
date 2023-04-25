import {Inscription} from "./Inscription";
import {RequestAnalysis} from "./RequestAnalysis";

export interface Appointment {
  numappointement: string;
  date_appointment: string;
  inscription: Inscription;
  requestAnalysis: RequestAnalysis;
}
