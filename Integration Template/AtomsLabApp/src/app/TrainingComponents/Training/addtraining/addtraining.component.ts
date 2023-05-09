import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainingService} from "../../../Services/Training/training.service";

@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.css']
})
export class AddtrainingComponent {
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private trainingservice:TrainingService,private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this._trainingForm = this.formBuilder.group({
      descTraining: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      tentative: new FormControl('', [Validators.required]),
      minscore: new FormControl('', [Validators.required]),

    });
  }
  public _trainingForm: FormGroup = new FormGroup({
    descTraining: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    tentative: new FormControl('', [Validators.required]),
    minscore: new FormControl('', [Validators.required]),
  });
  get courseForm(): FormGroup {
    return this._trainingForm;
  }
  add(data:any){
    this.trainingservice.addTraining(data).subscribe(()=>this.route.navigate(['TrainingList']));
    console.log(data);
  }
}
