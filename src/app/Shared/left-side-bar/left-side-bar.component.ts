import { Component } from '@angular/core';
import {User} from "../../Model/UserManagementModels/User";
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../Services/HrManager/Duty/duty.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent {
  table: any;
  id: number | undefined;
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService
              ){}
}
