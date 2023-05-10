import {Reactif} from "./Reactif";
import {Deposit} from "./Deposit";

export interface Stock{
  StockId:{
    expiryDate:Date;
    numLot:number;
  }
  qteStock:number;
  reactif:Reactif;
  deposit:Deposit;


}
