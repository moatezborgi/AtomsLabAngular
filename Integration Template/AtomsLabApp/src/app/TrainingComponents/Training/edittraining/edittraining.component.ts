import { Component } from '@angular/core';
import {Training} from "../../../Model/trainingmodels/Training";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../Services/Course/course.service";
import {TrainingService} from "../../../Services/Training/training.service";

@Component({
  selector: 'app-edittraining',
  templateUrl: './edittraining.component.html',
  styleUrls: ['./edittraining.component.css']
})
export class EdittrainingComponent {
training:Training[]=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trainingservice :TrainingService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingservice.retrieveAllTrainings()
      .subscribe(x => this.training =x);
  }

  onSubmit() {
    this.trainingservice.updateTraining(this.training,this.trainingservice)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/training', this.training.pop()]);
  }
}
