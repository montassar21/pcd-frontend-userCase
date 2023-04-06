import { Component, OnInit } from '@angular/core';
import {FormService} from './form-service.service'
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form!:FormGroup;
  title: any;
  constructor(private fb:FormBuilder,
    private route:Router,private formService: FormService) {}
ngOnInit():void{
  this.form=this.fb.group({
    Gender:['',Validators.required],
    marital_status:['',Validators.required],
    age: ['',Validators.required],
    scolarship: ['',Validators.required],
    mother_qualification: ['',Validators.required],
    mother_occupation: ['',Validators.required],
    father_occupation: ['',Validators.required],
    inflation_rate: ['',Validators.required],
    previous_qualifcation: ['',Validators.required],
    course: ['',Validators.required],
    curricular_units_1st_sem_without_evaluations: ['',Validators.required],
    curricular_units_1st_sem_approved: ['',Validators.required],
    curricular_units_1st_sem_credited: ['',Validators.required],
    curricular_units_1st_sem_with_evaluations: ['',Validators.required],
    curricular_units_2nd_sem_without_evaluations: ['',Validators.required],
    curricular_units_2nd_sem_approved: ['',Validators.required],
    curricular_units_2nd_sem_credited: ['',Validators.required],
    curricular_units_2nd_sem_with_evaluations: ['',Validators.required]
    })
}
  onSubmit() {
   console.log(this.form.value);
    // send the form data to the Flask backend using the FormService
    this.formService.sendForm(this.form.value).subscribe(
    {next:(
      response=>{
        console.log(response.prediction);

      }
    ),error:(err=>{

      console.log(err);
     } )
    })




  }

}
