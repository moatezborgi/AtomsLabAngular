import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {Duty} from "../../../Model/HrManagementModels/Duty";
import { TypeDuty } from '../../../Model/HrManagementModels/Duty';
import {DatePipe} from "@angular/common";
import { PlanificationDuty } from '../../../Model/HrManagementModels/PlanificationDuty';
import {DutyPlanificationDTO} from "../../../Model/HrManagementModels/DutyPlanificationDTO";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-duty',
  templateUrl: './add-duty.component.html',
  styleUrls: ['./add-duty.component.css']
})
export class AddDutyComponent implements OnInit{
  username: any;
   dutyPlanificationDTO = {
    planificationDuty: {
      idPlanificationDuty: 0,
      active: true,
      datePlanification: new Date().toISOString().slice(0, 10) // Set the current date
    },
    duty: {
      id_duty: 0,
      dateHeureDebut: '0',
      dateHeureFin: '0',
      type: 'NUIT'
    }
  };
  selectedType: TypeDuty = TypeDuty.NUIT;
  selectedType1: String= "Desactiver ";
  selectedType2: Date = new Date() ;
  types = Object.values(TypeDuty);
  currentDate;
  isActive: boolean = true;
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService,private datePipe: DatePipe) {
    this.currentDate = new Date();
    this.isActive = true;

  }
  table: any;
  list:  any;
  ngOnInit() {
    this.username = this.aRoute.snapshot.params['username'];
    console.log(this.currentDate);
  }
  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "FAILED",
      "Your Event cannot added !",
      "error"
    );
  }
  async alertAddWithSuccess() {
    const msg = await Swal.fire(
      "DONE",
      "Your Event added successfully!",
      "success"
    );
  }
   assignduty( planificationData: DutyPlanificationDTO) {
    this.dutyService.addDuty(this.dutyPlanificationDTO,this.username).subscribe(
      () => {
        this.route.navigate(['DutyList/'+this.username])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        await this.alertAddWithSuccess();
      }
      );
     console.log(planificationData)
  }
}
