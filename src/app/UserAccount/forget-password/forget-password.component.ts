import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ResetPasswordService} from "../../Services/UserManagementService/UserService/reset-password.service";
import {ResesPasswordRequest} from "../../Model/UserManagementModels/ResesPasswordRequest";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Role} from "../../Model/UserManagementModels/Role";
import {RoleService} from "../../Services/UserManagementService/RoleService/role.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{
  token: string= '';
  private _reserForm: FormGroup = new FormGroup({});

  get resetForm(): FormGroup {
    return this._reserForm;
  }

  constructor(private formBuilder: FormBuilder,private router: Router,private resetPassword:ResetPasswordService,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._reserForm = this.formBuilder.group({
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
    });
    this.token = <string>this.activatedRoute.snapshot.queryParamMap.get('token');
    console.log(`Reset password token: ${this.token}`);
    // Use the token to reset the user's password

  }

  onSubmit(form:any): void {
    if (this._reserForm.valid) {
      const resetPasswordRequest= new ResesPasswordRequest(this.token,form.password1)
      // Rediriger vers la page d'accueil
      console.log(form.password1,form.password2)
      this.resetPassword.resetPassword(resetPasswordRequest).subscribe(
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
        }
      )
    }
  }


}
/*implements OnInit{
  token: string= '';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.token = <string>this.route.snapshot.queryParamMap.get('token');
      console.log(`Reset password token: ${this.token}`);
      // Use the token to reset the user's password
  }*/
