import {User} from "../UserManagementModels/User";

export interface Holiday {
  idHoliday: number;
  startDate: Date;
  endDate: Date;
  reason: string;
   status: boolean;
  user: User;
  typeHoliday: TypeHoliday;
  paid: boolean;
}
export enum TypeHoliday {
  Annuel='Annuel',
  Maladie='Maladie',
  Maternité='Maternité',
  Paternité='Paternité'
}
