import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculatorService {

  constructor() { }

  NetInhandSalary:any;

  CalculateSalary(salaryPerMonth:any)
  {
    this.NetInhandSalary=salaryPerMonth*12;
    return this.NetInhandSalary;
  }
}
