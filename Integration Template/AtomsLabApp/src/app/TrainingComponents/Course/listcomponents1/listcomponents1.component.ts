import { Component } from '@angular/core';
import {Course} from "../../../Model/trainingmodels/Course";
import {Router} from "@angular/router";
import {CourseService} from "../../../Services/Course/course.service";

@Component({
  selector: 'app-listcomponents1',
  templateUrl: './listcomponents1.component.html',
  styleUrls: ['./listcomponents1.component.css']
})
export class Listcomponents1Component {
  course:Course[]=[];

  constructor(private courseService: CourseService,private router:Router) { }
  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getAllCourses().subscribe(
      data => {
        this.course = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updatecourse(id:number)
  {this.router.navigate(['updatecourse',id]);

  }
  deletecourse(id:number)
  { this.courseService.remove(id).subscribe(data=>{
    console.log(data);

  })

  }
}
