import { Component, OnInit } from '@angular/core';
import {Customermodel} from './../customermodel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

states:any[]=["Andhra Pradesh","Tamil Nadu","Tamil Nadu","West Bengal"];

model:Customermodel={
  fullname:'',
  username:'',
  password:'',
  mobilenumber:0,
  state:null,
  agreement:false
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFormSubmit() {
    alert('Registration successful');
  }

}
