import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {Role} from "../../Model/UserManagementModels/Role";
import {RoleService} from "../../Services/UserManagementService/RoleService/role.service";
import {UserDto} from "../../Model/UserManagementModels/UserDto";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserResponse} from "../../Model/UserManagementModels/UserResponse";

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {

  id:any;
  username: any;
  toUpdateUser: UserResponse={}as UserResponse;
  roles!: Role[];
  private edit: boolean = false;
  private _myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8)]),
    dateBirth: new FormControl(),
    cin: new FormControl('', [Validators.required,
      Validators.minLength(8), Validators.maxLength(8)
    ]),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    hiringDate: new FormControl(),
    jobPost: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required,
      Validators.minLength(8), Validators.maxLength(8)

    ]),
    roleId: new FormControl('')
  });
  get myForm(): FormGroup {
    return this._myForm;
  }

  ngOnInit(): void {
    this._myForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,
        Validators.minLength(8)]),
      dateBirth: new FormControl('',),
      cin: new FormControl('', [Validators.required,
        Validators.minLength(8), Validators.maxLength(8)
      ]),
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      hiringDate: new FormControl('',),
      jobPost: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required,
        Validators.minLength(8), Validators.maxLength(8)
      ]),
      roleId: new FormControl('')
    });
    this.roleService.retrieveRoles().subscribe(
      (r: Role[]) => {
        this.roles = r;
      },
      (error) => {
        console.log('An error occurred: ', error);
      }
    );
    this.username = this.route.snapshot.paramMap.get('username');

    if (this.username !== null) {
      this.userService.loadUserByUsername(this.username).subscribe(
        user => {
          this.myForm.get('username')?.setValue(user.username)
          this.myForm.get('cin')?.setValue(user.cin)
          this.myForm.get('fname')?.setValue(user.fname)
          this.myForm.get('lname')?.setValue(user.lname)
          this.myForm.get('jobPost')?.setValue(user.jobPost)
          this.myForm.get('mail')?.setValue(user.mail)
          this.myForm.get('phoneNumber')?.setValue(user.phoneNumber)
          this.edit = true;
          this.id = user.id_user

        }
      )
    }
  }

  constructor(private router: Router,private route: ActivatedRoute, private formBuilder: FormBuilder, private roleService: RoleService, private userService: UserService) {
  }

  submitForm(form: any): void {
    if (this.edit) {
      const updateduser = new UserDto(form.username, form.password, new Date('1999-01-01'), form.cin, form.fname, form.lname, new Date('2021-01-01'), form.jobPost, form.mail, form.phoneNumber, form.roleId)
      if (this.username !== null) {

        this.userService.updateUser(this.id, updateduser).subscribe(
          response => {
            console.log(response)
            this.router.navigate(['/home']);

            // Handle the response from the server
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
    }else {
        //if (form.valid) {
        console.log(form);
        // Do something with the form data here

        const user = new UserDto(form.username, form.password, new Date('1999-01-01'), form.cin, form.fname, form.lname, new Date('2021-01-01'), form.jobPost, form.mail, form.phoneNumber, form.roleId)
        this.userService.save(user).subscribe(
          response => {
            console.log(response)
            this.router.navigate(['/home']);
            // Handle the response from the server
          },
          error => {
            console.log(error)

            Swal.fire({
              title: 'Error ',
              text: error.error,
              icon: 'error'
            });
            // Handle any errors that occurred
          }
        )

        Swal.fire({
          title: 'Well Done ',
          text: 'User added succesfully.',
          icon: 'success'
        });
        //}

      }



  }
}
