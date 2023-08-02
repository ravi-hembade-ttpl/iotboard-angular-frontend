import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/shared/shared-service/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isLinear = true;
  disableNext: boolean = true;
  disableCode: boolean = true;
  isCompletedMail = false;
  show_password: boolean = false;
  showPassword: boolean =false;
  showCP: boolean = false;
  showP: boolean = false;


  
  constructor(
    private fb: FormBuilder,
    private customValidator : CustomvalidationService,
    private routes : Router,
    )
    { }

  @ViewChild('stepper')
  stepper!: MatStepper;

  ngOnInit(): void {
    var arr =['.com','.in'];
    this.firstFormGroup = this.fb.group({
      email: ['', [Validators.required], [this.customValidator.validateEmailAsync()]],
      server : ['', Validators.required],
      password: ['', [Validators.required, this.customValidator.passwordValidator()]],
      confirmPassword: ['', [Validators.required, this.customValidator.passwordValidator()]],
    },{
      validator: Validators.compose([this.customValidator.MatchPassword('password', 'confirmPassword')])
    })

    this.secondFormGroup = this.fb.group({
      email: ['', [Validators.required], [this.customValidator.validateEmailAsync()]],
      code:['', Validators.required]
    })
  }

  get firstFormGroupControl() {
    return this.firstFormGroup.controls;
  }

  get seconfFormGroupControl() {
    return this.secondFormGroup.controls;
  }

  selectConditions(event:any)
  {
    if(event.target.checked == true && this.firstFormGroup.valid)
    {
      this.disableNext=false;
      this.isCompletedMail=true;
    }
    else
    {
      this.disableNext=true;
    }
  }

  checkCode(event:any)
  {
    if(event.target.value.length == 4)
    { 
      this.disableCode=false;
    
    }
    else
    {
      this.disableCode=true;
    }
  }

  onNext(value:any)
  {
    if(value == true)
    {
        setTimeout(() => {
        this.routes.navigate(['/login']);
          }, 2000);
    }
  }

  showpassword(id: any, el: any) {
    let x: any = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.class = 'ri-eye-off-line';
      this.show_password = true;
    } else {
      x.type = "password";
      el.class = 'password-eye';
      this.show_password = false;
    }
  }

  showConfirmPassword(id: any, el: any) {
    let x: any = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.class = 'ri-eye-off-line';
      this.showPassword = true;
    } else {
      x.type = "password";
      el.class = 'password-eye';
      this.showPassword = false;
    }
  }

  confirmPassword(event:any)
  {
    console.log("Event--", event.target.value) 
   
      this.showCP = event.target.value.length >=1 ? true: false;
    
  }

  password(event: any)
  {
    this.showP = event.target.value.length >=1 ? true: false;
  }
}
