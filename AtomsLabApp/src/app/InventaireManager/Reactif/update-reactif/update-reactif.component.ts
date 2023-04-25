import {Component, Input, OnInit} from '@angular/core';
import {Reactif} from "../../../Model/StockManagementModels/Reactif";
import {ActivatedRoute, Router} from "@angular/router";
import {ReactifService} from "../../../Services/InventoryManager/Reactif/reactif.service";

@Component({
  selector: 'app-update-reactif',
  templateUrl: './update-reactif.component.html',
  styleUrls: ['./update-reactif.component.css']
})
export class UpdateReactifComponent implements OnInit {
  @Input() reactif!: Reactif
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private reactifService:ReactifService) {
  }
  id:any
  ngOnInit() {
  }

  updateReactif(data:any){
    this.reactifService.updateInvoice(this.aRoute.snapshot.params['id'],data)
  .subscribe(()=>this.route.navigate(['ReactifList']))
}

}
