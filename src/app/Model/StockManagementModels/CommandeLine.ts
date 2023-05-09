import {Reactif} from "./Reactif";
import {RequestCommande} from "./RequestCommande";

export interface CommandeLine{
  id_CommandeLine:number;
  dateCommandeLine:Date;
  reactif:Reactif;
  requestCommande:RequestCommande;
}
