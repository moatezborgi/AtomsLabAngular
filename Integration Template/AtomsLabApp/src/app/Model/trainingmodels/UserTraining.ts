import {User} from "../UserManagementModels/User";
import {Training} from "./Training";
import {UserTrainingQuestionResponse} from "./UserTrainingQuestionResponse";

export interface UserTraining
{

   id_user_training:number;
   user:User[];
  training:Training[];

  dateforamtion:Date;

  score:number;
  userTrainingQuizResponseList:UserTrainingQuestionResponse[];
}
