import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {TypeDuty} from "../../../Model/HrManagementModels/Duty";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-duty',
  templateUrl: './add-duty.component.html',
  styleUrls: ['./add-duty.component.css']
})
export class AddDutyComponent implements OnInit{
  selectedvalue:any;
  Change(e:any){
    console.log(e.target.value);
  this.selectedvalue=e.target.value;
  console.log(this.selectedvalue);
    localStorage.setItem('selectedvalue', this.selectedvalue); // save the selected value to localStorage

  }
  selectedType: TypeDuty = TypeDuty.NUIT;
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
      type : TypeDuty.NUIT
    }
  };
  types = Object.values(TypeDuty); // Assuming you have a TypeDuty enum
  selectedType1: String= "Desactiver ";
  selectedType2: Date = new Date() ;
  currentDate;
  isActive: boolean = true;

  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService,private datePipe: DatePipe,private fb: FormBuilder) {
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
    this.dutyPlanificationDTO.duty.type = value; // set the selected type
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
   assignduty( planificationData: any) {
    console.log("hawhaw")
      console.log(planificationData);
    console.log(this.dutyPlanificationDTO);

     // this.dutyPlanificationDTO.duty.type = this.selectedType; // set the selected type
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
