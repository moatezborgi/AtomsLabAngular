import {Delivery_line} from "./Delivery_line";
import {Stock} from "./Stock";
import {CommandeLine} from "./CommandeLine";

export interface Reactif{
  idReactif:number;
  nameReactif?:string;
  unit:string;
  delivery_lineList:Delivery_line[];
  stockList:Stock[];
  commandeLineList:CommandeLine[];

}
