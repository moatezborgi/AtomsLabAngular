import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../Services/UserManagementService/UserService/user.service";
import {UserResponse} from "../../Model/UserManagementModels/UserResponse";

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

  }


  ngOnInit(): void {
    this.userService.retrieveUsers().subscribe((result) => {
      this.list = result;
      this.table = $('#Userstable').DataTable({
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
            data: null,
            orderable: false, // Disable sorting for this column

            render: function (data, type, row) {
              return '<div class="dropdown dropdown-action">' +
                '<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>' +
                '<div class="dropdown-menu dropdown-menu-end">' +
                '<a class="dropdown-item" href="edit-tax.html"><i class="fa-solid fa-pen-to-square m-r-5"></i> Modifier</a>' +
                '<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient"><i class="fa fa-trash-alt m-r-5"></i> Supprimer</a>' +
                '</div>' +
                '</div>';
            }
          }
        ]
      });
    });

      }



}
