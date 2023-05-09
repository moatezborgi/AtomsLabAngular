import {RequestAnalysis} from "./RequestAnalysis";

export interface Patient {
  index_patient: string;
  fName: string;
  lName: string;
  dateofbirth: string;
  gsm: string;
  height: number;
  weight: number;
  requestAnalysisList: RequestAnalysis[];
}
