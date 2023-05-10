import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {DutyPlanificationDTO} from "../../../Model/HrManagementModels/DutyPlanificationDTO";
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {DatePipe} from "@angular/common";
import {TypeDuty} from "../../../Model/HrManagementModels/Duty";
import {NotificationService} from "../../../Services/HrManager/Notification/notification.service";

@Component({
  selector: 'app-edit-duty',
  templateUrl: './edit-duty.component.html',
  styleUrls: ['./edit-duty.component.css']
})
export class EditDutyComponent  implements OnInit{
  username:any;
  id:any;
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
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService,private datePipe: DatePipe
    ,private notificationService: NotificationService) {}
  ngOnInit() {
     this.id = this.aRoute.snapshot.params['id'];
    this.username = this.aRoute.snapshot.params['username'];
    // this.dutyService.getdutyy(id).subscribe(
    //   (result: DutyPlanificationDTO) => {
    //     this.dutyPlanificationDTO = result;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
  updateduty( planificationData: DutyPlanificationDTO) {
    console.log("labaleb"+this.username)
    console.log("kaleb"+this.id)

    this.dutyService.updateDuty(this.dutyPlanificationDTO,this.id,this.username).subscribe(
      () => {
        this.route.navigate(['DutyList/'+this.username])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        this.notificationService.notify('Duty Updated!');
        await this.alertAddWithSuccess();
      }
    );
    console.log(planificationData)
  }
}

