import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReactifService} from "../../../Services/InventoryManager/Reactif/reactif.service";

@Component({
  selector: 'app-delete-reactif',
  templateUrl: './delete-reactif.component.html',
  styleUrls: ['./delete-reactif.component.css']
})
export class DeleteReactifComponent implements OnInit{
  constructor(private route:Router,
              private reactifService:ReactifService,
              private activatedRoute:ActivatedRoute) { }
  id:any
ngOnInit():void {
this.reactifService.deleteReactif(this.activatedRoute.snapshot.params['id'])
  .subscribe(()=>this.route.navigate(['ReactifList']))
}

// deletereactif(id:any){
//   this.reactifService.deleteReactif(this.activatedRoute.snapshot.params['id'])
//     .subscribe(()=>this.route.navigate(['ReactifList']))
//
// }

}
