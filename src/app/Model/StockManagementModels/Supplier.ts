import {RequestCommande} from "./RequestCommande";

export interface Supplier{
  idSupplier:number;
  address:string;
  gsm:string;
  descSupplier:string;
  requestCommandeList:RequestCommande[];
}
