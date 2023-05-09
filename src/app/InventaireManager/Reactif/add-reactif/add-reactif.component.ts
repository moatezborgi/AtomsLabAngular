import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReactifService} from "../../../Services/InventoryManager/Reactif/reactif.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-reactif',
  templateUrl: './add-reactif.component.html',
  styleUrls: ['./add-reactif.component.css']
})
export class AddReactifComponent implements OnInit{

  private _addForm: FormGroup = new FormGroup({
    nameReactif: new FormControl('', [Validators.required]),
    unit: new FormControl('', Validators.required)
  });
  get addForm(): FormGroup {
    return this._addForm;
  }
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
