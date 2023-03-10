import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'customers',component:CustomersComponent,
children:[
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'update/:id',component:UpdateComponent}
]},
{path:'**',component:ErrorMessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
