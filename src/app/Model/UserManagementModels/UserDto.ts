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
  constructor(
    username: string,
    password: string,
    dateBirth: Date,
    cin: string,
    fname: string,
    lname: string,
    hiringDate: Date,
    jobPost: string,
    mail: string,
    phoneNumber: string,
    idrole: Role
  ) {
    this.username = username;
    this.password = password;
    this.dateBirth = dateBirth;
    this.cin = cin;
    this.fname = fname;
    this.lname = lname;
    this.hiringDate = hiringDate;
    this.jobPost = jobPost;
    this.mail = mail;
    this.phoneNumber = phoneNumber;
    this.idrole = idrole;
  }
}
