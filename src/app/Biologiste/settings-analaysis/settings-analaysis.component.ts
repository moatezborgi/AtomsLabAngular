import { Component, OnInit} from '@angular/core';
import {
  SettingsAnalysisServiceService
} from "../../Services/RequestAnalaysisServices/settings-analysis-service.service";
import {first} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {HttpResponse} from "@angular/common/http";


@Component({
  selector: 'app-settings-analaysis',
  templateUrl: './settings-analaysis.component.html',
  styleUrls: ['./settings-analaysis.component.css']
})
export class SettingsAnalaysisComponent implements OnInit     {
  constructor(private settingsAnalysisServiceService:SettingsAnalysisServiceService,private formBuilder: FormBuilder) {
    this.table = null;

  }
  list:any;
  table: any;
refreshTableprelev():void
{
  this.settingsAnalysisServiceService.retrieveAllSamplingType().pipe(first()).subscribe(
    (result) => {
      this.list = result;
      if (this.table) {
        this.table.destroy();
      }
      this.table = $('#samplingtable').DataTable({
        "language": {
          "url": "assets/fr.json"
        },
        data: this.list,
        pageLength: 5,
        lengthChange: false,

        columns: [
          {title: 'Code Type', data: 'idSampling'},
          {title: 'Description', data: 'descSampling'},
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

  ngOnInit(): void {
    this.refreshTableprelev();
    this._prelevForm = this.formBuilder.group({
       descprelev: new FormControl('', [Validators.required]),
    });
  }


  private _prelevForm: FormGroup = new FormGroup({
    descprelev: new FormControl('', [Validators.required]),
  });
  get prelevForm(): FormGroup {
    return this._prelevForm;
  }

  ajouterPrelev(samplingType:any) {
    this.settingsAnalysisServiceService.addSamplingType(samplingType.descprelev)
      .subscribe((response: HttpResponse<any>) => {
        console.log('Added');
        if (response.status === 200) {
          Swal.fire({
            title: 'Success',
            text: 'Type de prélévement ajouté avec succés',
            icon: 'success'
          });
          this.refreshTableprelev();
        } else {
          console.error('Error adding sampling type:', response.statusText);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Quelque chose s\'est mal passé\n!',
            footer: 'Veuillez réessayer plus tard\n.'
          });
        }
      }, (error) => {
        console.error('Error adding sampling type:', error);
      });

  }
}
