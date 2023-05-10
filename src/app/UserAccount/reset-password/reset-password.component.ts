import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../Services/UserManagementService/UserService/reset-password.service";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private _reserForm: FormGroup = new FormGroup({});

  get resetForm(): FormGroup {
    return this._reserForm;
  }

  constructor(private formBuilder: FormBuilder, private router: Router,private resetPassword:ResetPasswordService,private http:HttpClient) {
  }

  ngOnInit(): void {
    this._reserForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
    });

  }

  onSubmit(form:any): void {
    if (this._reserForm.valid) {
      // Rediriger vers la page d'accueil
      console.log(form.username)

     let res = this.resetPassword.forgotPassword(form.username)
      console.log(res)
      Swal.fire({
        title: 'Hello !',
        text: 'Check your mail',
        icon: 'info'
      });
    }
  }

}
