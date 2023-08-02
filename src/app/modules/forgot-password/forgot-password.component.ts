import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/shared/shared-service/customvalidation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isLinear = true;
  disableNext: boolean = true;
  disableFinish: boolean = true;
  isCompletedMail = false;
  show_password: boolean = false;
  showPassword:boolean =false;
  currentPassword: any;
  passwordValid: boolean = false;
  showCP: boolean =false;

  constructor(
    private fb: FormBuilder,
    private routes : Router,
    private customValidator : CustomvalidationService,
    )
    { }

  ngOnInit(): void {
    var arr =['.com','.in'];
    this.firstFormGroup = this.fb.group({
      email: ['', [Validators.required], [this.customValidator.validateEmailAsync()]]

    })

    this.secondFormGroup = this.fb.group({
      code:['', Validators.required],
      password: ['', [Validators.required, this.customValidator.passwordValidator()]],
      confirmPassword: ['', [Validators.required, this.customValidator.passwordValidator()]],
    })
  }


  get firstFormGroupControl() {
    return this.firstFormGroup.controls;
  }

  get seconfFormGroupControl() {
    return this.secondFormGroup.controls;
  }

  checkEmail(event:any)
  {
    if(this.firstFormGroup.valid)
    {
      console.log("Valid");
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
     // this.disableCode=false;
    
    }
    else
    {
     // this.disableCode=true;
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
    this.disableFinish = event.target.value == this.currentPassword ? false : true;
   
      this.showCP = event.target.value.length >=1 ? true: false;
    
  }

  password(event:any)
  {
    this.currentPassword = event.target.value
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

 

}
