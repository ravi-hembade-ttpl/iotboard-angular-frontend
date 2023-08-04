import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainHomeComponent } from './modules/main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideNavComponent,
    HeaderComponent,
    MainHeaderComponent,
    HomeComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
