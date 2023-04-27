import {Quiz} from "./Quiz";

export interface UserTrainingQuestionResponse
{
 idUserTrainingQuizResponse:number;
 quiz:Quiz[];


   response:Response[];
   userTraining:UserTrainingQuestionResponse[];


}
