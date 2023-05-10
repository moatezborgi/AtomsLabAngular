import {Delivery_line} from "./Delivery_line";
import {RequestCommande} from "./RequestCommande";
import {User} from "../UserManagementModels/User";

export interface RequestDelivery{
  id_RequestDelivery:number;
  delivery_lineList:Delivery_line[];
  requestCommande:RequestCommande;
  user:User;
}
