import {User} from "../UserManagementModels/User";


export interface Reclamation {
  idSkills: number;
  descSkills: string;
  userlist: User[];
}
