import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDeviceComponent } from './my-device/my-device.component';

const routes: Routes = [
  { path: '', component: MyDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceConfigurationRoutingModule { }
