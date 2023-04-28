import {User} from "../UserManagementModels/User";

export interface Experience {
  idExperience: number;
  descExperience: string;
  startDate: Date;
  endDate: Date;
  user: User;
}
