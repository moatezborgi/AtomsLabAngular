import { Component } from '@angular/core';
import {Course} from "../../../Model/trainingmodels/Course";
import {CourseService} from "../../../Services/Course/course.service";
import {Training} from "../../../Model/trainingmodels/Training";
import {TrainingService} from "../../../Services/Training/training.service";

@Component({
  selector: 'app-listtraining',
  templateUrl: './listtraining.component.html',
  styleUrls: ['./listtraining.component.css']
})
export class ListtrainingComponent {
  trainings:Training[]=[];

  constructor(private trainingService: TrainingService) { }
  ngOnInit() {
    this.getTraining;
  }
  getTraining() {
    this.trainingService.retrieveAllTrainings().subscribe(
      data => {
        this.trainings = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
