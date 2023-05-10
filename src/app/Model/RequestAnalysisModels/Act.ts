import {ActRequestAnalysisSampling} from "./ActRequestAnalysisSampling";
import {ResultAct} from "./ResultAct";
import {SamplingType} from "./SamplingType";

export interface Act {
  idAct: string;
  descAct: string;
  coeffAct: number;
  priceUnit: number;
  resultActList: ResultAct[];
  samplingTypeList: SamplingType[];
  actRequestAnalysisSamplingList: ActRequestAnalysisSampling[];
}
