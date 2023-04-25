import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../Services/AuthenticationConfig/login.service";
import {AuthenticationRequest} from "../../Model/UserManagementModels/AuthenticationRequest";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private helper = new JwtHelperService();
  private _loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  constructor(private formBuilder: FormBuilder,  private router: Router,  private loginService: LoginService, private userService:UserService) {
  }

  ngOnInit() {
    this._loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    if(this.loginService.isLoginIn()==true) {

      this.router.navigate(["pages/dashboard"]);
    }
  }


  onSubmit(form:any): void {

    if (this.loginForm.valid) {
      // Rediriger vers la page d'accueil
      let authAttempt=new AuthenticationRequest(form.username,form.password)
      this.loginService.login(authAttempt).subscribe(
        resp=>{
          const test=JSON.stringify(resp.body);
          const test1=JSON.parse(test);
          console.log(test1.token);
          localStorage.setItem('token', test1.token);
          console.log(localStorage.getItem('token'))
          const username = this.helper.decodeToken(test1.token).sub;
          console.log(username);
          localStorage.setItem('username', username);
          /*const username = this.helper.decodeToken(test1.token).sub;
          console.log(username);
          const user=this.userService.loadUserByUsername(username);
          console.log(user);
          const data=JSON.stringify(user);
          const user1=JSON.parse(data);
          console.log(user1);
          localStorage.setItem('user', user1);*/

          this.router.navigate(['/home']);
        });
    }


  }
}

