import {PlanificationDuty} from "./PlanificationDuty";
import {EchangeDuty} from "./EchangeDuty";
import {Component} from "@angular/core";

export interface Duty {
  idDuty: number;
  dateHeureDebut: Date;
  dateHeureFin: Date;
  type: TypeDuty;
  echangeDuties:EchangeDuty[];
  planificationDuties:PlanificationDuty[];
}
export enum TypeDuty {
  NUIT='NUIT',
  WEEKEND='WEEKEND',
  JOUR_FERIE='JOUR_FERIE'
}
