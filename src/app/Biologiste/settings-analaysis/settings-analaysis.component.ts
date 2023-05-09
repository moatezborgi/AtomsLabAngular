import { Component, OnInit} from '@angular/core';
import {
  SettingsAnalysisServiceService
} from "../../Services/RequestAnalaysisServices/settings-analysis-service.service";
import {first} from "rxjs";


@Component({
  selector: 'app-settings-analaysis',
  templateUrl: './settings-analaysis.component.html',
  styleUrls: ['./settings-analaysis.component.css']
})
export class SettingsAnalaysisComponent implements OnInit     {
  constructor(private settingsAnalysisServiceService:SettingsAnalysisServiceService) {
    this.table = null;

  }
  list:any;
  table: any;


  ngOnInit(): void {
    this.settingsAnalysisServiceService.retrieveAllSamplingType().pipe(first()).subscribe(
      (result) => {
        this.list = result;
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





}
