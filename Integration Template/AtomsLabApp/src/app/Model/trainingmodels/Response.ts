import {UserTrainingQuestionResponse} from "./UserTrainingQuestionResponse";
import {Question} from "./Question";

export interface Response
{
  id_Response:number;
  response:string;
  iscorrect:Boolean;
  question:Question[];
  userTrainingQuizResponses:UserTrainingQuestionResponse[];
}
