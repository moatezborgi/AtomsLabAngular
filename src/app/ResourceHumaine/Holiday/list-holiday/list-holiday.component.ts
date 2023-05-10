import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HolidayService} from "../../../Services/HrManager/Holiday/holiday.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";
import {NotificationService} from "../../../Services/HrManager/Notification/notification.service";

@Component({
  selector: 'app-list-holiday',
  templateUrl: './list-holiday.component.html',
  styleUrls: ['./list-holiday.component.css']
})
export class ListHolidayComponent {
  public searchTerm: string = '';

  itemsPerPage = 10;
  currentPage = 1;
  username: any;
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private holidayService:HolidayService,
              private datePipe: DatePipe,private notificationService: NotificationService ) {this.table=null;}
  list:any;
  table: any;
  ngOnInit(): void {
    this.username=this.aRoute.snapshot.params['username']
    //this.dutyService.Dutylist().subscribe(k =>{this.table=k});
    this.holidayService.HolidaylistbyUser(this.username).subscribe((data) => {
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
  onItemsPerPageChange(value: number) {
    this.itemsPerPage = value;
    this.currentPage = 1;
  }
  async deleteHoliday(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.holidayService.deleteHoliday(id).subscribe(
      (res) => {
        // Refresh duty list
        this.holidayService.HolidaylistbyUser(this.username).subscribe((data) => {
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
        if(res == null){
          console.log("here delete")
          this.alertcannotDeleteWithSuccess();
        }else{this.alertDeleteWithSuccess()}
      },
      (error) => {
        console.log("zzzzz"+error);
      }
    );
    //  }
  }
  async alertcannotDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Holiday passed or ongoing",
      "Your Holiday wont deleted :)",
      "error"
    );
  }
  async alertDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Deleted!",
      "Your Holiday has been deleted.",
      "success"
    );
  }
  deleteEvent(id:number){
    Swal.fire({
      title: 'Are you sure want to remove this Event?',
      text: 'You will not be able to recover this Event!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor:'red',
    }).then(async (result) => {
      if (result.value) {
        //delete Event confirmation
        await this.deleteHoliday(id);
        this.notificationService.notify('Holiday Deleted!');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })

  }
}
