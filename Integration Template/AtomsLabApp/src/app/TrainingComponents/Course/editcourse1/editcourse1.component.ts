import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../../../Model/trainingmodels/Course";
import {CourseService} from "../../../Services/Course/course.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-editcourse1',
  templateUrl: './editcourse1.component.html',
  styleUrls: ['./editcourse1.component.css']
})
export class Editcourse1Component implements OnInit {
 @Input() course!: Course

  constructor(
    private aRoute:ActivatedRoute,
    private route:Router,
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {


  }
  private _courseForm: FormGroup = new FormGroup({
    idcourse: new FormControl('', [Validators.required]),

    descriptioncourse: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    urlFIle: new FormControl('', [Validators.required]),
  });
  get courseForm(): FormGroup {
    return this._courseForm;
  }
  id: any
  ngOnInit() {
    this._courseForm = this.formBuilder.group({
      idcourse: new FormControl('', [Validators.required]),

      descriptioncourse: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      urlFIle: new FormControl('', [Validators.required]),

    });
   this.courseService.getcourseById(this.aRoute.snapshot.params['id']).subscribe((response:Course)=>{
    // alert(response.descriptioncourse)
   //  this.course.descriptioncourse=response.descriptioncourse;
     this.courseForm.get('idcourse')?.setValue(response.idcourse);
     this.courseForm.get('descriptioncourse')?.setValue(response.descriptioncourse);
     this.courseForm.get('name')?.setValue(response.name);
     this.courseForm.get('urlFIle')?.setValue(response.fileUrl);

     this.course=response;

   })

  }

  updateCourse(data:any){


    this.courseService.update(this.aRoute.snapshot.params['id'],data)
      .subscribe(()=>this.route.navigate(['CourseList']))
  }


}
