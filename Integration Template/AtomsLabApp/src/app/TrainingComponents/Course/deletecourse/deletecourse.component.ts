import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../Services/Course/course.service";

@Component({
  selector: 'app-deletecourse',
  templateUrl: './deletecourse.component.html',
  styleUrls: ['./deletecourse.component.css']
})
export class DeletecourseComponent implements OnInit{
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private courseservice:CourseService) { }
  ngOnInit():void {
    this.courseservice.remove(this.aRoute.snapshot.params['id'])
      .subscribe(()=>this.route.navigate(['CourseList']))
  }
deletecourse(id:number)
{ this.courseservice.remove(id).subscribe(data=>{
  console.log(data);

})

}
}
