import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this._reserForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this._reserForm.valid) {
      // Rediriger vers la page d'accueil
      this.router.navigate(['/home']);
    }
  }
}
