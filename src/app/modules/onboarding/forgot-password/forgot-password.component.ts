import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/shared/shared-service/customvalidation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  @ViewChild('stepper') stepper!: MatStepper;
  previousStepIndex: number =0;
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
  passwordInput: string ='';
  passwordInput1: string ='';
  showP: boolean = false;

  constructor(
    private fb: FormBuilder,
    private routes : Router,
    private customValidator : CustomvalidationService,
    )
    { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      email: ['', [Validators.required], [this.customValidator.validateEmailAsync()]]
    })

    this.secondFormGroup = this.fb.group({
      code:['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.validatePassword
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        this.validatePassword
      ]],
    })
    this.secondFormGroup.get('password')?.valueChanges.subscribe((value: string) => {
      this.passwordInput = value;
    });

    this.secondFormGroup.get('confirmPassword')?.valueChanges.subscribe((value: string) => {
      this.passwordInput1 = value;
    });
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
      this.disableNext=false;
      this.isCompletedMail=true;
    }
    else
    {
      this.disableNext=true;
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
    this.disableFinish = event.target.value == this.currentPassword ? false : true;
    this.showCP = event.target.value.length > 0 &&  event.target.value.length < 8 ? true: false;
  }

  password(event:any)
  {
    this.currentPassword = event.target.value
    this.showP = event.target.value.length > 0 &&  event.target.value.length < 8 ? true: false;
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