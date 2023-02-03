import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';

//Import for reactive formn
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DisplaySalaryComponent } from './display-salary/display-salary.component';
import {SalaryCalculatorService} from '../../src/app/salary-calculator.service';
import { ContactUSComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    RegistrationComponent,
    DisplaySalaryComponent,
    ContactUSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SalaryCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
