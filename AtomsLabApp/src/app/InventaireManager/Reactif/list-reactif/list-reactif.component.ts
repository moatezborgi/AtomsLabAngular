import {Component, OnInit} from '@angular/core';
import {ReactifService} from "../../../Services/InventoryManager/Reactif/reactif.service";

@Component({
  selector: 'app-list-reactif',
  templateUrl: './list-reactif.component.html',
  styleUrls: ['./list-reactif.component.css']
})
export class ListReactifComponent implements OnInit{
  constructor(private reactifService:ReactifService) {
    this.table=null;
  }
  list:any;
  table: any;
  ngOnInit(): void {
    this.reactifService.retrieveAllReactifs().subscribe(k =>{this.table=k});
  }

}
