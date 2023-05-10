import {Component, OnInit} from '@angular/core';
import {first, switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";
import {FilterPipe} from "../../../pipes/filter.pipe";
import {NotificationService} from "../../../Services/HrManager/Notification/notification.service";
import {PdfService} from "../../../Services/HrManager/PDF/pdf.service";

@Component({
  selector: 'app-list-duty',
  templateUrl: './list-duty.component.html',
  styleUrls: ['./list-duty.component.css']
//  pipes: [FilterPipe]
})

export class ListDutyComponent implements OnInit{
  itemsPerPage = 10;
  currentPage = 1;
  public searchTerm: string = '';

  username: any;
  table: any;
  status: any;
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService,
              private datePipe: DatePipe,private notificationService: NotificationService,
              private pdfservice: PdfService) {this.table=null;
      // this.route.queryParam.subscribe(params => {
      //   this.nom = params['nom'];
      //   //L'attribut nom contient "Dupont"
      // });
    // this.table = this.aRoute.paramMap
    //   .pipe(
    //     map(paramMap => paramMap.get('username')),
    //     switchMap(username => this.dutyService.DutylistbyUser(username))
    //   );
                                            }

  list:any;
  ngOnInit(): void {
this.username=this.aRoute.snapshot.params['username']
    if (this.username==="admin"){
      this.dutyService.Dutylist().subscribe((data) => { console.log(data)
        // Parcourir la liste des devoirs et formater les dates de début et de fin
        this.table = data.map((duty) => ({
          ...duty,
          dateHeureDebut: this.datePipe.transform(
            duty.duty.dateHeureDebut,
            'yyyy-MM-dd hh-mm'
          ),
          dateHeureFin: this.datePipe.transform(duty.duty.dateHeureFin, 'yyyy-MM-dd hh-mm'),
        }));
      });
    }
    else{
   // this.nom = this.route.snapshot.paramMap.get('nom');
    //this.dutyService.Dutylist().subscribe(k =>{this.table=k});
    this.dutyService.DutylistbyUser(this.username).subscribe((data) => { console.log(data)
      // Parcourir la liste des devoirs et formater les dates de début et de fin
      this.table = data.map((duty) => ({
        ...duty,
        dateHeureDebut: this.datePipe.transform(
          duty.duty.dateHeureDebut,
          'yyyy-MM-dd hh-mm'
        ),
        dateHeureFin: this.datePipe.transform(duty.duty.dateHeureFin, 'yyyy-MM-dd hh-mm'),
      }));
    });
  }
  }
  onItemsPerPageChange(value: number) {
    this.itemsPerPage = value;
    this.currentPage = 1;
  }
  async deleteDuty(id: number,id1:number) {
   // if (confirm("Are you sure you want to delete this duty?")) {
      this.dutyService.deleteDuty(id).subscribe(
        (res) => {
          // Refresh duty list
          this.dutyService.DutylistbyUser(this.username).subscribe((data) => { console.log(data)
            // Parcourir la liste des devoirs et formater les dates de début et de fin
            this.table = data.map((duty) => ({
              ...duty,
              dateHeureDebut: this.datePipe.transform(
                duty.duty.dateHeureDebut,
                'yyyy-MM-dd hh-mm'
              ),
              dateHeureFin: this.datePipe.transform(duty.duty.dateHeureFin, 'yyyy-MM-dd hh-mm'),
            }));
          });
          if(res == null){
            console.log("here delete")
            this.alertcannotDeleteWithSuccess();
          }else{this.alertDeleteWithSuccess() ; this.dutyService.deleteDutyduty(id1).subscribe();}
          },
        (error) => {
          console.log("zzzzz"+error);
        }
      );

    //  }
  }
  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "Cancelled",
      "Your Event is safe :)",
      "error"
    );
  }
  async alertcannotDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Duty archived or ongoing",
      "Your Event wont deleted :)",
      "error"
    );
  }
  async alertAddWithSuccess() {
    const msg = await Swal.fire(
      "Deleted!",
      "Your Event has been deleted.",
      "success"
    );
  }
  async alertDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Deleted!",
      "Your Event has been deleted.",
      "success"
    );
  }
  deleteEvent(id:number,id1:number){
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
        await this.deleteDuty(id,id1);
        this.notificationService.notify('Duty Deleted!');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })

  }
  public openPDF(): void {
    this.pdfservice.GeneratePDF().subscribe();
  }

}
