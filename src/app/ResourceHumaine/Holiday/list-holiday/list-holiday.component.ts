import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HolidayService} from "../../../Services/HrManager/Holiday/holiday.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-list-holiday',
  templateUrl: './list-holiday.component.html',
  styleUrls: ['./list-holiday.component.css']
})
export class ListHolidayComponent {
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private holidayService:HolidayService,
              private datePipe: DatePipe ) {this.table=null;}
  list:any;
  table: any;
  ngOnInit(): void {
    //this.dutyService.Dutylist().subscribe(k =>{this.table=k});
    this.holidayService.Holidaylist().subscribe((data) => {
      // Parcourir la liste des devoirs et formater les dates de début et de fin
      this.table = data.map((holiday) => ({
        ...holiday,
        startdate: this.datePipe.transform(
          holiday.startDate,
          'yyyy-MM-dd'
        ),
        enddate: this.datePipe.transform(holiday.endDate, 'yyyy-MM-dd')
      }));
    });
  }
}
