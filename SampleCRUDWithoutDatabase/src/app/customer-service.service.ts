import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CustomerInfo {
  firstName: string,
  lastName: string,
  email: string,
  contact: string,
}

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  customerDetails: any[] = [];
  constructor() { }

  public getCustomer() {
    return this.customerDetails;
  }

  public addCustomer(data: CustomerInfo) {
    this.customerDetails.push(data);
  }

  public editCustomer(index: number, data: CustomerInfo) {
    this.customerDetails[index] = data;
  }

  public deleteCustomer(index: number) {
    this.customerDetails.splice(index, 1)
  }
}
