import {User} from "../UserManagementModels/User";
import {Deposit} from "./Deposit";
import {CommandeLine} from "./CommandeLine";
import {Supplier} from "./Supplier";
import {RequestDelivery} from "./RequestDelivery";

export interface RequestCommande{
  idRequest:number;
  dateRequest:Date;
  supplierList:Supplier[];
  user:User;
  requestDeliveryList:RequestDelivery[];
  commandeLineList:CommandeLine[];
  deposit:Deposit;


}
