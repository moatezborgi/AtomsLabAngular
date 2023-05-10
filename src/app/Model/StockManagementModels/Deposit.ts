import {Stock} from "./Stock";
import {RequestCommande} from "./RequestCommande";

export interface Deposit{
  idDepot:number;
  libDepot:string;
  stockList:Stock[];
  requestCommandeList:RequestCommande[];
}
