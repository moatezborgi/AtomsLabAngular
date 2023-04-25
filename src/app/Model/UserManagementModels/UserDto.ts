import {Role} from "./Role";

export class UserDto {
  username!: string;
  password!: string;
  dateBirth!: Date;
  cin!: string;
  fname!: string;
  lname!: string;
  hiringDate!: Date;
  jobPost!: string;
  mail!: string;
  phoneNumber!: string;
  idrole!: Role;
}
