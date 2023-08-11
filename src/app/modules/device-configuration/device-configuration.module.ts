import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceConfigurationRoutingModule } from './device-configuration-routing.module';
import { MyDeviceComponent } from './my-device/my-device.component';
import { DeviceComponent } from './device/device.component';
import { GatewayComponent } from './gateway/gateway.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyDeviceComponent,
    DeviceComponent,
    GatewayComponent,
  ],
  imports: [
    CommonModule,
    DeviceConfigurationRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DeviceConfigurationModule { }
