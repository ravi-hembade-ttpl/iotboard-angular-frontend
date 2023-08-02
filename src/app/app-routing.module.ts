import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: "login", component : LoginComponent },
  { path: "register", component : RegisterComponent},
  { path: "forgot", component : ForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
