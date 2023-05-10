import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WebSocketServiceService} from "../Services/WebSocketServices/web-socket-service.service";
import {DutyService} from "../Services/HrManager/Duty/duty.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
max:any;
  constructor(private webSocketService: WebSocketServiceService,private dutyService:DutyService) {}
  table: any;
  i : any;
  list: any[] | undefined;
  ngOnInit(): void {
  //   this.dutyService.mostuserchange().subscribe((res: any[]) => {
  //     console.log(res); // add this line to log the response data
  //     this.table = res.map((obj: any) => {
  //       console.log(obj); // add this line to log the object
  //       return { list: obj.name, nbr: obj.count };
  //     });
  //     console.log(this.table); // add this line to log the table data
  //   });
  }
}
