import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../Services/AuthenticationConfig/login.service";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import Swal from "sweetalert2";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  username: string;
  private _changePwdForm: FormGroup = new FormGroup({
    password1: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
  });

  get changePwdForm(): FormGroup {
    return this._changePwdForm;
  }
  constructor(private formBuilder: FormBuilder,  private router: Router,  private userService: UserService,private route: ActivatedRoute) {
    this.username=""
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      console.log(this.username);
    });

    //this.userService.loadUserByUsername(this.username)
    this._changePwdForm = this.formBuilder.group({
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(form:any): void {
    if (this._changePwdForm.valid) {
      // Rediriger vers la page d'accueil
      console.log(form.password1)
      this.userService.updatePassword(this.username,form.password1).subscribe(
        response => {
          console.log(response)
          // Handle the response from the server
          Swal.fire({
            title: 'Changed ',
            text: 'Your Password has been changed succesfully',
            icon: 'success'
          });
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error)

          Swal.fire({
            title: 'Error ',
            text: error.error,
            icon: 'error'
          });

        })
    }

  }
}
