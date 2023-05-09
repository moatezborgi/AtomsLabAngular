import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import {UserResponse} from "../../Model/UserManagementModels/UserResponse";
import {MatDialog} from "@angular/material/dialog";
import {UserFromComponent} from "../user-from/user-from.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-retrieve-users',
  templateUrl: './retrieve-users.component.html',
  styleUrls: ['./retrieve-users.component.css']
})
export class RetrieveUsersComponent implements OnInit{

      list!:UserResponse[];
  table: any;
  constructor(private router: Router,
              private userService:UserService,
              ) {
    this.table = null;
   /* this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthChange: false,
      processing: true,
      language: {
        url: "assets/fr.json"
      },
      columns: [
        {title: 'username', data: 'username'},
        {title: 'nom', data: 'fname'},
        {title: 'prenom', data: 'lname'},
        {title: 'mail', data: 'mail'}]
    }*/
  }
  rows: UserResponse[] = [];
  columns = [
    { prop: 'id_user', name: 'ID' },
    { prop: 'username', name: 'Username' },
    { prop: 'dateBirth', name: 'Date of Birth' },
    { prop: 'cin', name: 'CIN' },
    { prop: 'phoneNumber', name: 'Phone Number' },
    { prop: 'mail', name: 'Email' },
    { prop: 'accountStatus', name: 'Account Status' },
    { prop: 'fname', name: 'First Name' },
    { prop: 'lname', name: 'Last Name' },
    { prop: 'dateCreation', name: 'Date of Creation' },
    { prop: 'hiringDate', name: 'Hiring Date' },
    { prop: 'jobPost', name: 'Job Post' },
    { prop: 'dateTimeLastConnexion', name: 'Last Connection' },
    { prop: 'role.roleName', name: 'Role' }
  ];
  page = {
    size: 10,
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0
  };
  searchTerm = '';

  ngOnInit(): void {

    this.userService.retrieveUsers().subscribe((result) => {
      this.list = result;
      this.rows = result;
      /*this.table = $('#Userstable').DataTable({
        "language": {
          "url": "assets/fr.json"
        },
        data: this.list,
        pageLength: 5,
        lengthChange: false,

        columns: [
          {title: 'username', data: 'username'},
          {title: 'nom', data: 'fname'},
          {title: 'prenom', data: 'lname'},
          {title: 'mail', data: 'mail'},
          {
            title: 'Action',
            data: 'username',
            orderable: false,
            render: function (data, type, row) {
              return '<div class="dropdown dropdown-action">' +
                '<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>' +
                '<div class="dropdown-menu dropdown-menu-end">' +
                '<a class="dropdown-item" id="btn-modifier-' + data + '" (click)="modifierUser(\'' + data + '\')" ><i class="fa-solid fa-pen-to-square m-r-5"></i> Modifier</a>' +
                '<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient"><i class="fa fa-trash-alt m-r-5"></i> Supprimer</a>' +
                '</div>' +
                '</div>';
            }

          }
        ]
      });*/
    });

      }

  modifierUser(username: string) {
    alert(username)


    this.router.navigate(['/userform/'+username]);
  }
   enableUser(id_user: number) {
this.userService.enableUserAcount(id_user).subscribe(
  response => {
    console.log(response)
    // Handle the response from the server
    Swal.fire({
      title: 'Enabled ',
      text: 'User Account enabled',
      icon: 'success'
    });
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
   disableUser(id_user: number) {
     /*this.userService.desableUserAcount(id_user).subscribe(
       response => {
         console.log(response)
         // Handle the response from the server
         Swal.fire({
           title: 'Disabled ',
           text: 'User Account Disabled',
           icon: 'success'
         });
       },
       error => {
         console.log(error)

         Swal.fire({
           title: 'Error ',
           text: 'error',
           icon: 'error'
         });
       }
     )*/
     Swal.fire({
       title: 'Disabled ',
       text: 'User Account Disabled',
       icon: 'success'
     });
   }


  onPage(event: any): void {
    // Update the page object when the user changes the page
    this.page.pageNumber = event.offset;
  }

  onSearch(event: any): void {
    // Update the search term and reset the page number to 0
    this.searchTerm = event.target.value.toLowerCase();
    this.page.pageNumber = 0;
  }
  get filteredRows(): UserResponse[] {
    // Filter the rows based on the search term
    const filtered = this.rows.filter((row: UserResponse) => {
      const values = Object.values(row);
      return values.some((value: any) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchTerm);
        } else if (value instanceof Date) {
          return value.toLocaleDateString().includes(this.searchTerm);
        } else if (value instanceof Object) {
          return Object.values(value).some((v: any) => {
            return v.toLowerCase().includes(this.searchTerm);
          });
        }
        return false;
      });
    });

    // Update the page object based on the filtered rows
    this.page.totalElements = filtered.length;
    this.page.totalPages = Math.ceil(this.page.totalElements / this.page.size);

    // Return the paginated subset of rows
    const start = this.page.pageNumber * this.page.size;
    return filtered.slice(start, start + this.page.size);
  }


}
