import {Component, OnInit} from '@angular/core';
import {ReactifService} from "../../../Services/InventoryManager/Reactif/reactif.service";import {} from '@angular/material';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddReactifComponent} from "../add-reactif/add-reactif.component"
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";
import {Reactif} from "../../../Model/StockManagementModels/Reactif";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {tap} from "rxjs";


@Component({
  selector: 'app-list-reactif',
  templateUrl: './list-reactif.component.html',
  styleUrls: ['./list-reactif.component.css']
})

export class ListReactifComponent implements OnInit{
  closeResult: string | undefined;
  private deleteId: number | undefined;
  isDeleted: boolean | undefined;


  constructor(private reactifService:ReactifService,
              private dialogRef:MatDialog,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private modalService: NgbModal
              ) {
    this.table=null;

  }



  list:any;
  table: any;
  searchtext: any;
  p: number =1;
  itemsperpage: number=8
  totalData:any;

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.height='80px'
    // dialogConfig.width='80px'
    dialogConfig.position ={
      left:'20px'

    }
    this.dialogRef.open(AddReactifComponent,dialogConfig);


  }
  ngOnInit(): void {
    this.reactifService.retrieveAllReactifs().subscribe(k =>{this.table=k});
    this.totalData=this.table.length;
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openDelete(targetModal: any, i: Reactif) {
    this.deleteId = i.idReactif;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  addReactif(data:any) {

    this.reactifService.addReactif(data).pipe(
      tap(() => this.ngOnInit()
      )).subscribe();
    console.log(data);
  }
    deleteReactif(id:any){
    this.reactifService.deleteReactif(this.deleteId)
      .subscribe((results)=>{

        this.ngOnInit();
        this.modalService.dismissAll();
        this.isDeleted = true;
      })

    }
    retrievedata(){
      this.reactifService.retrieveAllReactifs().subscribe(k =>{this.table=k});
    }

}
