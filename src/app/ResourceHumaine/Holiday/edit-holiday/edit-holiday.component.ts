import { Component } from '@angular/core';
import {TypeDuty} from "../../../Model/HrManagementModels/Duty";
import {ActivatedRoute, Router} from "@angular/router";
import {HolidayService} from "../../../Services/HrManager/Holiday/holiday.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";
import {DutyPlanificationDTO} from "../../../Model/HrManagementModels/DutyPlanificationDTO";
import {Holiday, TypeHoliday} from "../../../Model/HrManagementModels/Holiday";
import {NotificationService} from "../../../Services/HrManager/Notification/notification.service";

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.css']
})
export class EditHolidayComponent {
  selectedvalue:any;
  Change(e:any){
    console.log(e.target.value);
    this.selectedvalue=e.target.value;
    console.log(this.selectedvalue);
    localStorage.setItem('selectedvalue', this.selectedvalue); // save the selected value to localStorage
  }
  selectedType: TypeHoliday = TypeHoliday.Annuel;
  username:any;
  id:any;
  Holiday = {
    idHoliday: 0,
    startDate: '0',
    endDate: '0',
    reason:"",
    status: true,
    typeHoliday:TypeHoliday.Annuel,
    paid: true
  };
  types = Object.values(TypeHoliday); // Assuming you have a TypeDuty enum
  selectedType1: String= "Desactiver ";
  selectedType2: Date = new Date() ;
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private holidayService:HolidayService,private datePipe: DatePipe,private notificationService: NotificationService) {}
  ngOnInit() {
    this.id = this.aRoute.snapshot.params['id'];
    this.username = this.aRoute.snapshot.params['username'];
    this.selectedvalue = localStorage.getItem('selectedvalue'); // retrieve the selected value from localStorage
    this.Change({ target: { value: this.selectedvalue } });
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
  updateduty( holiday: Holiday) {
    console.log("labaleb"+this.username)
    console.log("kaleb"+this.id)

    this.holidayService.UpdateHoliday(this.Holiday,this.id).subscribe(
      () => {
        this.route.navigate(['HolidayList/'+this.username])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        await this.alertAddWithSuccess();
        this.notificationService.notify('Holiday Updated!');

      }
    );
   // console.log(planificationData)
  }
}

