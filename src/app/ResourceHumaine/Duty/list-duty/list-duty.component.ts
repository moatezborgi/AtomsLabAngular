import {Component, OnInit} from '@angular/core';
import {first} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {DatePipe} from "@angular/common";
@Component({
  selector: 'app-list-duty',
  templateUrl: './list-duty.component.html',
  styleUrls: ['./list-duty.component.css']
})

export class ListDutyComponent implements OnInit{
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService,
              private datePipe: DatePipe ) {this.table=null;}
  list:any;
  table: any;
  ngOnInit(): void {
    //this.dutyService.Dutylist().subscribe(k =>{this.table=k});
    this.dutyService.Dutylist().subscribe((data) => {
      // Parcourir la liste des devoirs et formater les dates de début et de fin
      this.table = data.map((duty) => ({
        ...duty,
        dateHeureDebut: this.datePipe.transform(
          duty.duty.dateHeureDebut,
          'yyyy-MM-dd'
        ),
        dateHeureFin: this.datePipe.transform(duty.duty.dateHeureFin, 'yyyy-MM-dd')
      }));
    });
  }
}
