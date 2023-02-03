import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { DisplaySalaryComponent } from './display-salary/display-salary.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'AboutUs',component:AboutUsComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'SalaryInfo',component:DisplaySalaryComponent},
  {path:'ContactUs',component:ContactUSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
