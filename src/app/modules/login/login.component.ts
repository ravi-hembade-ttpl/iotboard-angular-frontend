import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  show_password: boolean = false;

  constructor(private fb: FormBuilder)
  {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit()
  {
    this.loginForm.patchValue({
      email: this.loginForm.value.email.replace(/\s/g, ""),
      password: this.loginForm.value.password.replace(/\s/g, "")
    });
    const loginForm = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    console.log("loginForm",loginForm)
  }

  get loginFormControl() {
    return this.loginForm.controls;
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
}

