import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MainHomeComponent } from './modules/main-home/main-home.component';
import { OnboardingModule } from './modules/onboarding/onboarding.module';

const routes: Routes = [
  { path: '', component: MainHomeComponent, loadChildren: ()=> OnboardingModule },
  { path: 'dashboard', component: HomeComponent, loadChildren: ()=> DashboardModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
