import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MainHomeComponent } from './modules/main-home/main-home.component';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { DeviceConfigurationModule } from './modules/device-configuration/device-configuration.module';

const routes: Routes = [
  { path: '', component: MainHomeComponent, loadChildren: ()=> OnboardingModule },
  { path: 'dashboard', component: HomeComponent, loadChildren: ()=> DashboardModule },
  { path: 'devices', component: HomeComponent, loadChildren: ()=> DeviceConfigurationModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
