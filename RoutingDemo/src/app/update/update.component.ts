import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ICustomer} from './../icustomer';
import {CustomerOperationsService} from './../customer-operations.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  customer: ICustomer = {
    id: '',
    name: '',
    email:'',
    password:''
  };

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service: CustomerOperationsService
  ) {}

  id:string|any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.getById(this.id);
  })
}

  getById(id: any) {
    this.service.getById(id).subscribe((data) => {
      this.customer = data;
    });
  }

  update() {
    this.service.update(this.customer)
    .subscribe({
      next:(data) => {
        this.router.navigate(['home']);
      },
      error:(err) => {
        alert('Data can not be updated. Please try after some time')
      }
    })
  }

}
