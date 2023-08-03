import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  passwordInput: string ='';
  passwordInput1: string ='';
  
  constructor(
    private fb: FormBuilder,
    private customValidator : CustomvalidationService,
    private routes : Router,
    )
    { }

  @ViewChild('stepper')stepper!: MatStepper;

  ngOnInit(): void {
    var arr =['.com','.in'];
    this.firstFormGroup = this.fb.group({
      email: ['', [Validators.required], [this.customValidator.validateEmailAsync()]],
      server : ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8),this.validatePassword]],
      confirmPassword: ['', [Validators.required,Validators.minLength(8),this.validatePassword]],
    },{
      validator: Validators.compose([this.customValidator.MatchPassword('password', 'confirmPassword')])
    })

    this.secondFormGroup = this.fb.group({
      email: ['', [Validators.required], [this.customValidator.validateEmailAsync()]],
      code:['', Validators.required]
    })

    this.firstFormGroup.get('password')?.valueChanges.subscribe((value: string) => {
      this.passwordInput = value;
    });

    this.firstFormGroup.get('confirmPassword')?.valueChanges.subscribe((value: string) => {
      this.passwordInput1 = value;
    });
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
   
    this.showCP = event.target.value.length > 0 &&  event.target.value.length < 8 ? true: false;    
  }

  password(event: any)
  {
    this.showP = event.target.value.length > 0 &&  event.target.value.length < 8 ? true: false;
  }

  validatePassword(control: AbstractControl) {
    const value = control.value;
    const hasNumber = /\d/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasSmallLetter = /[a-z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
    const errors: any = {};

    if(value.length == 0)
    {
      errors.zeroLength = true;
    }
    if (value.length >=1 && value.length < 8) {
      errors.minLength = true;
    }

    if (!hasNumber) {
      errors.noNumber = true;
    }

    if (!hasCapitalLetter) {
      errors.noCapital = true;
    }

    if (!hasSmallLetter) {
      errors.noSmall = true;
    }

    if (!hasSpecialChar) {
      errors.noSpecial = true;
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }
}
