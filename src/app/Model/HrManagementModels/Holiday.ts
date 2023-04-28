import {User} from "../UserManagementModels/User";

export interface Holiday {
  idHoliday: number;
  startDate: Date;
  endDate: Date;
  reason: string;
   status: boolean;
  paid: boolean;
  type: TypeHoliday ;
  user: User;
}
enum TypeHoliday {
  Annuel='annuel',
  Maladie='maladie',
  Maternité='maternité',
  Paternité='paternité'
}
