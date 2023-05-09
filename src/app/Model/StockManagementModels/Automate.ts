import {RequestOutput} from "./RequestOutput";


export interface Automate{
idAutomate:number;
descAutomate:string;
serviceDate:Date;
softwareVersion:number;
requestOutputList:RequestOutput[];
}
