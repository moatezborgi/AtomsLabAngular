import {Quiz} from "./Quiz";

export interface Question{


  id_question :number ;
  question:string;

  nbpoint: number;
  quiz:Quiz[];
  responseList:Response[];

}
