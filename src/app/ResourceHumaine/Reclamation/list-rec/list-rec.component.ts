import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamationService} from "../../../Services/HrManager/Reclamation/reclamation.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-rec',
  templateUrl: './list-rec.component.html',
  styleUrls: ['./list-rec.component.css']
})
export class ListRecComponent {
  itemsPerPage = 10;
  currentPage = 1;
  username: any;
  table: any;
  isApproved: boolean = false;

  public searchTerm: string = '';

  status: any;
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private reclamationService:ReclamationService,
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
    this.username=this.aRoute.snapshot.params['username'];
    console.log(this.username);
    if (this.username==="admin") {
      this.reclamationService.ALLReclamationlist().subscribe((data) => { console.log(data)
        // Parcourir la liste des devoirs et formater les dates de début et de fin
        this.table = data.map((reclamation) => ({
          ...reclamation,
          dateHeureReclamation: this.datePipe.transform(
            reclamation.dateHeureReclamation,
            'yyyy-MM-dd'
          ),
          dateDebutDuty: this.datePipe.transform(reclamation.planificationDuty.duty.dateHeureDebut, 'yyyy-MM-dd'),
          dateFinDuty: this.datePipe.transform(reclamation.planificationDuty.duty.dateHeureFin, 'yyyy-MM-dd')
        }));
      });
    }
else{
    this.reclamationService.Reclamationlist(this.username).subscribe((data) => { console.log(data)
      // Parcourir la liste des devoirs et formater les dates de début et de fin
      this.table = data.map((reclamation) => ({
        ...reclamation,
        dateHeureReclamation: this.datePipe.transform(
          reclamation.dateHeureReclamation,
          'yyyy-MM-dd'
        ),
        dateDebutDuty: this.datePipe.transform(reclamation.planificationDuty.duty.dateHeureDebut, 'yyyy-MM-dd'),
        dateFinDuty: this.datePipe.transform(reclamation.planificationDuty.duty.dateHeureFin, 'yyyy-MM-dd')
      }));
    });
  }
  }
  onItemsPerPageChange(value: number) {
    this.itemsPerPage = value;
    this.currentPage = 1;
  }
  async deleteDuty(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.reclamationService.deleteRec(id).subscribe(
      (res) => {
        // Refresh duty list
        this.reclamationService.Reclamationlist(this.username).subscribe((data) => { console.log(data)
          // Parcourir la liste des devoirs et formater les dates de début et de fin
          this.table = data.map((reclamation) => ({
            ...reclamation,
            dateHeureReclamation: this.datePipe.transform(
              reclamation.dateHeureReclamation,
              'yyyy-MM-dd'
            ),
            dateplanification: this.datePipe.transform(reclamation.planificationDuty.dateplanification, 'yyyy-MM-dd')
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
  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "Cancelled",
      "Your Event is safe :)",
      "error"
    );
  }
  async alertcannotDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Reclamation archived or ongoing",
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
        await this.deleteDuty(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })

  }
  async Acceptrec(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.reclamationService.accept(id).subscribe(
      () => {
        this.route.navigate(['Reclamation/'+this.username])
        location.reload();
      },
      (error) => {
        console.log("zzzzz"+error);
      }
    );
    //  }
  }
  Accept(id:number){
    Swal.fire({
      title: 'Are you sure want to accpet this Reclamation?',
      text: 'You will not be able to recover this Reclamation!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'No, keep it',
      confirmButtonColor:'green',
    }).then(async (result) => {
      if (result.value) {
        //delete Event confirmation
        await this.Acceptrec(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })
  }
  async Rejectrec(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.reclamationService.reject(id).subscribe(
      () => {
        this.route.navigate(['Reclamation/'+this.username])
        location.reload();
      },
      (error) => {
        console.log("zzzzz"+error);
      }
    );
    //  }
  }
  Reject(id:number){
    Swal.fire({
      title: 'Are you sure want to Reject this Reclamation?',
      text: 'You will not be able to recover this Reclamation!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'No, keep it',
      confirmButtonColor:'red',
    }).then(async (result) => {
      if (result.value) {
        //delete Event confirmation
        await this.Rejectrec(id);
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
