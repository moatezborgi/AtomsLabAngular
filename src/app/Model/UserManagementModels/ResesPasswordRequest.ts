export class ResesPasswordRequest {
  token!: string;
  password!: string;

  constructor(token: string, password: string) {
    this.token = token;
    this.password = password;
  }
}
