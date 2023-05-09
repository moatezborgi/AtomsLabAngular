import {Act} from "./Act";
import {RequestAnalysis} from "./RequestAnalysis";
import {SamplingType} from "./SamplingType";

export interface ActRequestAnalysisSampling {
  actRequestanalysisSamplingid: {
    requestAnalysis: RequestAnalysis;
    act: Act;
  };
  samplingType: SamplingType;
  coeff: number;
  prix_unit: number;
  tva: number;
}
