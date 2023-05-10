import {RequestOutput} from "./RequestOutput";
import {Reactif} from "./Reactif";
import {RequestDelivery} from "./RequestDelivery";

export interface Delivery_line{
  id_Delivery_line:number;
  qteDelivery:number;
  numLot:number;
  expiryDate:Date;
  requestOutput:RequestOutput;
  reactif:Reactif;
  requestDelivery:RequestDelivery;


}
