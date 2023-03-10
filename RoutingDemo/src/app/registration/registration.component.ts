import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ICustomer} from './../icustomer';
import {CustomerOperationsService} from './../customer-operations.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer: ICustomer = {
    id: '',
    name: '',
    email:'',
    password:''
  };

  constructor(private service:CustomerOperationsService, private router:Router){}

  ngOnInit(): void {
  }

  AddCustomers(){
    this.service.create(this.customer)
    .subscribe({
      next:(data) => {
        alert('Customer Registered successfully')
        this.router.navigate(["home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}


