import {Training} from "./Training";
import {Question} from "./Question";
import {UserTrainingQuestionResponse} from "./UserTrainingQuestionResponse";

export interface Quiz
{
  id_Quiz:number;
  start_date:Date;
  end_date:Date;
  duration:number;
  level:number;
  training:Training[];
  questionList:Question[];
  score:number;
  tentatives:number;
  userTrainingQuizResponses:UserTrainingQuestionResponse[];
}
