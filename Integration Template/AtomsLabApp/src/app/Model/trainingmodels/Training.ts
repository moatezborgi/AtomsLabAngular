import {Quiz} from "./Quiz";
import {UserTraining} from "./UserTraining";
import {Course} from "./Course";

export interface Training {
  id_training:number;
   descTraining:string;
   startDate:Date;
  endDate:Date;
  subject:string;
   tentative:number;
   minscore:number;
   quizList:Quiz[];
   courseList:Course[];
   userTrainingList:UserTraining[];

}
