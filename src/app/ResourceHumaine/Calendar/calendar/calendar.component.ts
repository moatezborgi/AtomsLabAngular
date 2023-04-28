import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import {HolidayService} from "../../../Services/HrManager/Holiday/holiday.service";
import {data} from "jquery";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarForm!: FormGroup;
  action: String = "Add";
  usernameForm!: FormGroup;
  usernameSearch = "";

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    headerToolbar: {
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay",
      start: "prev,next today",
    },
    plugins: [dayGridPlugin, listPlugin,timeGridPlugin, interactionPlugin],

    events: [],
    eventClick: (info) => {
      // Get the event object
      const event = info.event;
      // Populate the form fields with the event details
      this.calendarForm.patchValue({
        idHoliday: parseInt(event.id),
        reason: event.title,
        startDate: event.start,
        endDate: event.end
      });

      // Change the action to "update" instead of "new"
      this.action = "update";
    },
    eventDrop: (info) => {
      const event = info.event;

      this.calendarForm.patchValue({
        idHoliday: parseInt(event.id),
        reason: event.title,
        startDate: event.start,
        endDate: event.end
      });
      this.updateEvent();
    }


  };

  constructor(
    private eventsApi: HolidayService
  ) {}

  ngOnInit(): void {
    this.calendarForm = new FormGroup({
      idHoliday: new FormControl(""),
      reason: new FormControl("", Validators.required),
      startDate: new FormControl("", Validators.required),
      endDate: new FormControl("", Validators.required),
    });
    this.usernameForm = new FormGroup({
      username: new FormControl("")
    });
    this.getAllEvents(this.usernameSearch);
  }
  initForm(){
    this.calendarForm.patchValue({
      idHoliday: "",
      reason: "",
      startDate: "",
      endDate: ""
    });
    this.action="Add";
  }

  deleteEvent(){
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
        await this.deleteFunction();
        Swal.fire(
          'Deleted!',
          'Your Event has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })

  }

  onSubmit() {
    if (this.action == "Add") {
      this.addNewEvent();
    } else if (this.action == "update") {
      this.updateEvent();
    }
  }

  async alertAddWithSuccess() {
    const msg = await Swal.fire(
      "DONE",
      "Your Event added successfully!",
      "success"
    );
  }

  async alertUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "DONE",
      "Your Event updated successfully!",
      "success"
    );
  }
  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "FAILED",
      "Your Event cannot updated !",
      "error"
    );
  }
  addNewEvent(){
    this.eventsApi.addassignHoliday(this.calendarForm.value).subscribe(
      (res) => {
        console.log(this.calendarForm.value);
        //get all events from database and assign them to calender events list
        this.getAllEvents(this.usernameSearch);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await this.alertAddWithSuccess();
      }
    );
  }

  updateEvent(){
    this.eventsApi.UpdateHoliday(this.calendarForm.value,this.calendarForm.value.idHoliday).subscribe(
      (res) => {
        console.log("res ",res)
        this.getAllEvents(this.usernameSearch);
        if(res == null){
          console.log("here cond")
          this.alertcannotUpdatetWithSuccess();
        }
        else {
          this.alertUpdatetWithSuccess();
        }
      },
      (error) => {
        console.log("error : ",error);


      },
      async () => {

      }
    );
  }

  async deleteFunction(){
    this.eventsApi.deleteHoliday(this.calendarForm.value.idEvent).subscribe(
      res=>{
        this.getAllEvents(this.usernameSearch);
      },error=>{
        console.log(error);
      },()=>{
        this.initForm();
      }
    )
  }

  getAllEvents(username:any) {
    if(this.usernameSearch != "")
    {
      this.eventsApi.HolidaylistbyUser(username).subscribe(
        (res) => {
          this.calendarOptions.events = res.map((event) => {
            return {
              id: event.idHoliday.toString(),
              title: event.reason,
              start: new Date(event.startDate),
              end: new Date(event.endDate),
              editable: true,
              droppable: true,
              isEndResizable: true,
              isStartResizable: true,
            };
          });
        },
        (error) => {
          console.log(error);
        },
        () => {}
      );
    }
  }

  handleSearch(){
    this.usernameSearch = this.usernameForm.value.username
    this.getAllEvents(this.usernameSearch)
  }
}
