import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SettingsAnalysisServiceService} from "../../Services/RequestAnalaysisServices/settings-analysis-service.service";
import {RequestAnalysisserviceService} from "../../Services/RequestAnalaysisServices/request-analysisservice.service";
import {Patient} from "../../Model/RequestAnalysisModels/Patient";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-request-analysis',
  templateUrl: './add-request-analysis.component.html',
  styleUrls: ['./add-request-analysis.component.css']
})
export class AddRequestAnalysisComponent implements OnInit {
  constructor(private http: HttpClient,private requestAnalysisserviceService:RequestAnalysisserviceService,private formBuilder: FormBuilder) { }


  private _patientForm: FormGroup = this.formBuilder.group({
    indexpatient: [''],
    nom: [''],
    prenom: [''],
    gsm: [''],
    poid: [''],
    taille: [''],
    datenaiss: ['']
  });
  get patientForm(): FormGroup {
    return this._patientForm;
  }
  ngOnInit(): void {
    this.patientForm.get('nom')?.disable();
    this.patientForm.get('prenom')?.disable();
    this.patientForm.get('gsm')?.disable();
    this.patientForm.get('poid')?.disable();
    this.patientForm.get('taille')?.disable();
    this.patientForm.get('datenaiss')?.disable();

  }
  searchPatient() {
    const indexPatient = this.patientForm.get('indexpatient')?.value;

     this.requestAnalysisserviceService.retrievePatientbyindex(indexPatient)
       .subscribe((patient: Patient) => {
         console.log(patient);
         this.patientForm.get('taille')?.setValue(patient.height);
         this.patientForm.get('gsm')?.setValue(patient.gsm);
         this.patientForm.get('nom')?.setValue(patient.fname);
         this.patientForm.get('prenom')?.setValue(patient.lname);
         this.patientForm.get('poid')?.setValue(patient.weight);
         this.patientForm.get('datenaiss')?.setValue(patient.dateofbirth);






       });
  }
}
