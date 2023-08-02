import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
