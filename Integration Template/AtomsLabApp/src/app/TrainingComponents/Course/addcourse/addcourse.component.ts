import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../Services/Course/course.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit{
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private courseservice:CourseService) { }
  ngOnInit() {
  }
  add(data:any){

    this.courseservice.add(data).subscribe(()=>this.route.navigate(['CourseList']));
    console.log(data);
  }
}
