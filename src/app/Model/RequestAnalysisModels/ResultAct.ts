import {RequestAnalysis} from "./RequestAnalysis";
import {Act} from "./Act";

export interface ResultAct {
  idResult: number;
  dateResult: string;
  result: string;
  requestAnalysis: RequestAnalysis;
  act: Act;
}
