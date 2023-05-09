import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../Services/Course/course.service";
import {TrainingService} from "../../../Services/Training/training.service";

@Component({
  selector: 'app-deletetraining',
  templateUrl: './deletetraining.component.html',
  styleUrls: ['./deletetraining.component.css']
})
export class DeletetrainingComponent implements OnInit{
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private trainingService:TrainingService){}
  ngOnInit():void {
    this.trainingService.removeTraining(this.aRoute.snapshot.params['id'])
      .subscribe(()=>this.route.navigate(['TrainingList']))
  }

}
