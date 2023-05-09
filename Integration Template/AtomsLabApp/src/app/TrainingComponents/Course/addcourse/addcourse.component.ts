import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../Services/Course/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit{
  constructor(private aRoute:ActivatedRoute,
              private route:Router,
              private courseservice:CourseService,private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this._courseForm = this.formBuilder.group({
      descriptioncourse: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      fileUrl: new FormControl('', [Validators.required]),

    });
  }
  private _courseForm: FormGroup = new FormGroup({
    descriptioncourse: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    fileUrl: new FormControl('', [Validators.required]),
  });
  get courseForm(): FormGroup {
    return this._courseForm;
  }
  add(data:any){
    console.log(data);
    this.courseservice.add(data).subscribe(()=>this.route.navigate(['CourseList']));
    console.log(data);
  }
}
