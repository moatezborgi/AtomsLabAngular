import {Inscription} from "../RequestAnalysisModels/Inscription";
import {RequestAnalysis} from "../RequestAnalysisModels/RequestAnalysis";

export interface User {
  id_user?: number;
  username: string;
  password: string;
  dateBirth: string;
  cin: string;
  accountStatus: boolean;
  fname: string;
  lname: string;
  dateCreation?: string;
  hiringDate: string;
  jobPost: string;
  status_online: boolean;
  dateTimeLastConnexion?: string;
  inscriptionList?: Inscription[];
  requestAnalysisList?: RequestAnalysis[];
}
