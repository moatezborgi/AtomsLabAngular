import {RequestAnalysis} from "./RequestAnalysis";

export interface Patient {
  index_patient: string;
  fname: string;
  lname: string;
  dateofbirth: string;
  gsm: string;
  height: number;
  weight: number;
  //requestAnalysisList: RequestAnalysis[];
}
