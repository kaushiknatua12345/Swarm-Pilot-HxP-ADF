import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ICustomer} from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerOperationsService {

  constructor(private http:HttpClient) { }

  create(customer: ICustomer) {
    return this.http.post<ICustomer>('http://localhost:3000/employees', customer);
  }

  getById(id: string) {
    return this.http.get<ICustomer>('http://localhost:3000/employees/'+id);
   }

   update(customer:ICustomer){
    return this.http.put('http://localhost:3000/employees/'+customer.id,customer);
   }



}
