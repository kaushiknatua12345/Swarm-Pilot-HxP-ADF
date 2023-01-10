import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'customerdetails',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
