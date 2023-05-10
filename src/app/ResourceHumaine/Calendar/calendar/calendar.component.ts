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
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";

import {data, event} from "jquery";
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from "jspdf-autotable";
import html2canvas from 'html2canvas';
import {NotificationService} from "../../../Services/HrManager/Notification/notification.service";

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
  calendar: any;

  calendarOptions: CalendarOptions = {

    initialView: "dayGridMonth",
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 4 }
      },
      dayGrid: {
        displayEventTime: true
      }
    },
    headerToolbar: {
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay",
      start: "prev,next today",
    },  customButtons: {
      downloadPDFButton: {
        text: 'Download PDF',
        click: () => this.downloadPDF(),
      },
    },
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    },
    plugins: [dayGridPlugin, listPlugin,timeGridPlugin, interactionPlugin],
    editable: true,
    selectable: true,
    events: [],
    eventClick: (info) => {
      // Get the event object
      const event = info.event;

      // Populate the form fields with the event details
      this.calendarForm.patchValue({
        idHoliday: parseInt(event.id),
        reason: event.title,
        startDate: event.start,
        endDate: event.end,
      });

      // Change the action to "update" instead of "new"
      this.deleteEvent(event.id);
      console.log(event.id);
    },
    eventDrop: (info) => {
      const event = info.event;

      this.calendarForm.patchValue({
        idHoliday: parseInt(event.id),
        reason: event.title,
        startDate: event.start,
        endDate: event.end || event.start, // Set endDate to startDate if it's null
      });
      this.updateEvent();

    },
  };
  username: any;

  constructor(private aRoute:ActivatedRoute,
              private route:Router,
    private eventsApi: HolidayService,
  private eventsApi1: DutyService,private notificationService: NotificationService

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
    this.username=this.aRoute.snapshot.params['username']
    if(this.username!="admin"){this.getAllEvents(this.username);}
   //  hedhiii
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

  deleteEvent(id:any){
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
        await this.deleteFunction(id);
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
    this.eventsApi.addassignHoliday(this.calendarForm.value,this.username).subscribe(
      (res) => {
        console.log(this.calendarForm.value);
        this.username=this.aRoute.snapshot.params['username']

        //get all events from database and assign them to calender events list
        this.getAllEvents(this.username);
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
        this.username=this.aRoute.snapshot.params['username']
        this.getAllEvents(this.username);
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
  updateEvent1(){
    this.eventsApi1.updateDutydate(this.calendarForm.value,this.calendarForm.value.id).subscribe(
      (res) => {
        console.log("res ",res)
        this.username=this.aRoute.snapshot.params['username']
        this.getAllEvents(this.username);
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
  async deleteFunction(id:any){
    this.username=this.aRoute.snapshot.params['username']
    this.eventsApi.deleteHoliday(id).subscribe(
      res=>{

        this.getAllEvents(this.username);
      },error=>{
        console.log(error);
      },()=>{
        this.initForm();
      }
    )
    this.eventsApi1.deleteDuty(this.calendarForm.value.idEvent).subscribe(
      res=>{
        this.getAllEvents(this.username);
      },error=>{
        console.log(error);
      },()=>{
        this.initForm();
      }
    )
  }

  getAllEvents(username: any) {
    const holidayEvents$ = this.eventsApi.HolidaylistbyUser(username);
    const taskEvents$ = this.eventsApi1.DutylistbyUser(username);
    // merge the results of both observables
    forkJoin([holidayEvents$, taskEvents$]).subscribe(
      (results) => {
        const [holidayEvents, taskEvents] = results;

        const allEvents = [
          ...holidayEvents.map((event) => ({
            id: event.idHoliday.toString(),
            color: 'red',
            title: event.typeHoliday,
            desciption: event.reason,
            status: event.status,
            start: new Date(event.startDate),
            end: new Date(event.endDate),
            editable: true,
            droppable: true,
            isEndResizable: true,
            isStartResizable: true,
            borderColor: 'black',
            textColor: 'white',
            resizable: true,
            // Filter out events where the endDate is not equal to the startDate
            allDay: event.startDate === event.endDate ? true : false,
          //  allDay: false,

          })),
          ...taskEvents.map((task) => ({
            id: task.idPlanificationDuty.toString(),
            color: 'blue',
            title: task.duty.type,
            status: task.isActive,
            start: new Date(task.duty.dateHeureDebut),
            end: new Date(task.duty.dateHeureFin),
            editable: false,
            droppable: false,
            isEndResizable: false,
            isStartResizable: false,
            borderColor: 'black',
            textColor: 'white',
            resizable: true,
            // Filter out events where the endDate is not equal to the startDate
            allDay: task.duty.dateHeureDebut === task.duty.dateHeureFin ? true : false,
          })),
        ];
        // Adjust start and end times for all-day events
        for (let i = 0; i < allEvents.length; i++) {
          const event = allEvents[i];
          if (event.start.getDate() === event.end.getDate()) {
            event.start.setDate(event.start.getDate()+1);
            event.end.setDate(event.end.getDate()+1);
            event.allDay = true;
          }
        }

        this.calendarOptions.events = allEvents;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  handleSearch(){
    this.usernameSearch = this.usernameForm.value.username
    this.username=this.aRoute.snapshot.params['username']
    if(this.username=="admin"){ this.getAllEvents(this.usernameSearch);}
    else{this.getAllEvents(this.username)}
  }
  downloadPDF() {
    const calendarEl = document.getElementById('calendar');
    // @ts-ignore
    html2canvas(calendarEl).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      // @ts-ignore
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('calendar.pdf');
    });
  }
  // Function to download PDF from the FullCalendar
  // downloadPDF1() {
  //   // Create new jsPDF instance
  //   const doc = new jsPDF();
  //
  //   // Get the calendar element by ID
  //   const element = document.getElementById('calendar');
  //
  //   if (element) {
  //     // Use jsPDF autotable plugin to generate table from HTML element
  //     const html = element ? element.innerHTML : '';
  //     doc.autoTable({ html: html });
  //     // Save the PDF with a timestamp in the filename
  //     const timestamp = new Date().toISOString().substring(0, 19).replace(/:/g, "-");
  //     doc.save(`calendar_${timestamp}.pdf`);
  //   } else {
  //     console.error("Could not find element with ID 'calendar'");
  //   }
  // }
  public openPDF(): void {
    let DATA: any = document.getElementById('calendar');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      const date = new Date();
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save(`Calendar${date}${this.username}.pdf`);
      this.notificationService.notify('Calendar Downloaded!');

    });
  }
  addev(){
    Swal.fire({
      title: 'Are you sure want to Reject this Reclamation?',
      text: 'You will not be able to recover this Reclamation!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Add Duty',
      cancelButtonText: 'Add Holiday',
      confirmButtonColor:'blue',
    }).then(async (result) => {
      if (result.value) {
        this.route.navigate(['AddDuty/'+this.username])

        //delete Event confirmation
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.route.navigate(['AddHoliday/'+this.username])

      }
    })
  }
}
