import {Automate} from "./Automate";
import {User} from "../UserManagementModels/User";
import {Delivery_line} from "./Delivery_line";

export interface RequestOutput{
  idReqOut:number;
  dateRequest:Date;
  automate:Automate;
  user:User;
  delivery_lineList:Delivery_line[];
}
