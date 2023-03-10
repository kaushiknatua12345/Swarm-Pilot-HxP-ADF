import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'customerid': new FormControl(),
      'password': new FormControl()
    })
  }

  logindata(login:FormGroup){
    // console.log(this.login.value);
     this._http.get<any>("http://localhost:3000/employees")
     .subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.id === this.login.value.customerid && a.password === this.login.value.password
       });

       if(user){
         alert('you are successfully login');
         this._route.navigate(['/customers/update',this.login.value.customerid]);
       }else{
         alert('User Not Found');
         this._route.navigateByUrl('customers');
         this.login.value.customerid='';
         this.login.value.password='';
       }

     }, err=>{
       alert('Something was wrong');
     })


   }



}
