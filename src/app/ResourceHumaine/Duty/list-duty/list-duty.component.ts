import {Component, OnInit} from '@angular/core';
import {first, switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DutyService} from "../../../Services/HrManager/Duty/duty.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";
@Component({
  selector: 'app-list-duty',
  templateUrl: './list-duty.component.html',
  styleUrls: ['./list-duty.component.css']
})

export class ListDutyComponent implements OnInit{
  username: any;
  table: any;

  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private dutyService:DutyService,
              private datePipe: DatePipe ) {this.table=null;
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
   // this.nom = this.route.snapshot.paramMap.get('nom');
    //this.dutyService.Dutylist().subscribe(k =>{this.table=k});
    this.dutyService.DutylistbyUser(this.username).subscribe((data) => { console.log(data)
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
  deleteDuty(id: number) {
    if (confirm("Are you sure you want to delete this duty?")) {
      this.dutyService.deleteDuty(id).subscribe(
        () => {
          // Refresh duty list
          this.dutyService.DutylistbyUser(this.username).subscribe((data) => { console.log(data)
            // Parcourir la liste des devoirs et formater les dates de début et de fin
            this.table = data.map((duty) => ({
              ...duty,
              dateHeureDebut: this.datePipe.transform(
                duty.duty.dateHeureDebut,
                'yyyy-MM-dd'
              ),
              dateHeureFin: this.datePipe.transform(duty.duty.dateHeureFin, 'yyyy-MM-dd')
            }));
          });        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "Cancelled",
      "Your Event is safe :)",
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
      if (result.isConfirmed) {
        this.dutyService.deleteDuty(id).subscribe(
          () => {
            // Refresh duty list
            this.dutyService.DutylistbyUser(this.username).subscribe((data) => { console.log(data)
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
        //delete Event confirmation
        //await this.deleteDuty(id);
        // Swal.fire(
        //   'Deleted!',
        //   'Your Event has been deleted.',
        //   'success'
        // );
       }// else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'Cancelled',
      //     'Your Event is safe :)',
      //     'error'
      //   );
      // }
    });
  }
}
