import {Component, OnInit} from '@angular/core';
import {first, map, pipe} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {Duty} from "../../../Model/HrManagementModels/Duty";
import { TypeDuty } from '../../../Model/HrManagementModels/Duty';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-duty',
  templateUrl: './add-duty.component.html',
  styleUrls: ['./add-duty.component.css']
})
export class AddDutyComponent implements OnInit{
  selectedType: TypeDuty = TypeDuty.NUIT;
  types = Object.values(TypeDuty);
  //pp=Object.values(this.listusers());
  //p1=this.pp.values();
  // public : string = this.dutyService.Usernamelist();
   // usernames=Object.values(String);
  usernameForm!: FormGroup;
  usernameSearch = "";
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService
  ) {}
  table: any;
  list:  any;
  list1:  any;
  id: any;
  readonly ids: string[]=[];
  readonly ids1: string[]=[];

  ngOnInit() {
   // console.log(this.pp);

      this.dutyService.Usernamelist().subscribe((res:any) => {for(let i=0; i<res.length;i++ ){this.ids.push(res[i])}});
      return this.ids;

  }
  // listusers()
  // {
  //   this.dutyService.Usernamelist().subscribe((res:any) => {for(let i=0; i<res.length;i++ ){this.ids.push(res[i])}});
  //   return this.ids;
  // }
  // closeResult = '';
  //
  // open(content: any) {
  //   this.modalService.open(content,
  //     {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult =
  //       `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  //
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
  addDutyy(data:any){
    this.dutyService.JustaddDuty(data).subscribe();
    console.log("add");
  }
   assignduty(data: any) {
     this.usernameSearch = this.usernameForm.value.username
     this.addDutyy(data);
    this.dutyService.JustDutylist().subscribe((res: any) => {
      this.ids1.push(res[0])
    });
    if (parseInt((this.ids1).toString())) {
      console.log(parseInt((this.ids1).toString()));
    }
    this.dutyService.addDuty(parseInt((this.ids1).toString()), this.usernameSearch, data).subscribe(() => this.route.navigate(['DutyList']));
    console.log(data)
    this.ids1.pop();
  }
}
