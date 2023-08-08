import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  show_password: boolean = false;

  constructor(private fb: FormBuilder,
    private routes : Router,
    private auth: AuthService,
    )
  { }

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
    if(this.loginForm.valid)
    {
      this.auth.loginUser(loginForm).subscribe(
        (res:any)=>{
            console.log("Data--", res)
        },
        (err: any) => {
          console.log("error--",err.error.errors)
        }
      )
    }
   // sessionStorage.setItem("userEmail", this.loginForm.value.email);
   // this.routes.navigate(['/dashboard']);
    
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