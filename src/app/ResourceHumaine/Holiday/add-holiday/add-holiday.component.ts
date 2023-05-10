import { Component } from '@angular/core';
import {TypeDuty} from "../../../Model/HrManagementModels/Duty";
import {ActivatedRoute, Router} from "@angular/router";
import {HolidayService} from "../../../Services/HrManager/Holiday/holiday.service";
import {DatePipe} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";
import {TypeHoliday} from "../../../Model/HrManagementModels/Holiday";
import {NotificationService} from "../../../Services/HrManager/Notification/notification.service";

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent {
  selectedvalue:any;
  Change(e:any){
    console.log(e.target.value);
    this.selectedvalue=e.target.value;
    console.log(this.selectedvalue);
    localStorage.setItem('selectedvalue', this.selectedvalue); // save the selected value to localStorage
  }
  selectedType: TypeHoliday = TypeHoliday.Annuel;
  username: any;
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
  currentDate;
  isActive: boolean = true;

  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private holidayService:HolidayService,private datePipe: DatePipe,private fb: FormBuilder,
              private notificationService: NotificationService) {
    this.currentDate = new Date();
    this.isActive = true;
    this.selectedvalue = '';
  }
  table: any;
  list:  any;
  ngOnInit() {
    this.username = this.aRoute.snapshot.params['username'];
    console.log(this.currentDate);
    this.selectedvalue = localStorage.getItem('selectedvalue'); // retrieve the selected value from localStorage
    this.Change({ target: { value: this.selectedvalue } });
  }
  // Remove selectedType property initialization
// Add onTypeChange method to update selectedType property
  onTypeChange(value: any) {
    this.selectedType = value;
 //   this.dutyPlanificationDTO.duty.type = value; // set the selected type
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
  assignduty( holiday: any) {
    console.log("hawhaw")
    console.log(holiday);

    // this.dutyPlanificationDTO.duty.type = this.selectedType; // set the selected type
    this.holidayService.addassignHoliday(holiday,this.username).subscribe(
      () => {
        this.route.navigate(['HolidayList/'+this.username])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        this.notificationService.notify('Holiday Added!');

        await this.alertAddWithSuccess();
      }
    );
   // console.log(planificationData)
  }
}
