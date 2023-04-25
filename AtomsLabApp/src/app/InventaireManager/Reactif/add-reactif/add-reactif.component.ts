import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReactifService} from "../../../Services/InventoryManager/Reactif/reactif.service";

@Component({
  selector: 'app-add-reactif',
  templateUrl: './add-reactif.component.html',
  styleUrls: ['./add-reactif.component.css']
})
export class AddReactifComponent implements OnInit{
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private reactifService:ReactifService) { }
  ngOnInit() {
  }
  addReactif(data:any){

this.reactifService.addReactif(data).subscribe(()=>this.route.navigate(['ReactifList']));
    console.log(data);
  }

}
