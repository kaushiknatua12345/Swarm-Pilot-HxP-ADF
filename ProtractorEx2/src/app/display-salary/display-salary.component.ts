import { Component } from '@angular/core';
import {SalaryCalculatorService} from '../salary-calculator.service/../salary-calculator.service';

@Component({
  selector: 'app-display-salary',
  templateUrl: './display-salary.component.html',
  styleUrls: ['./display-salary.component.css'],
  providers:[SalaryCalculatorService]
})
export class DisplaySalaryComponent {
netsalary:any=85000;
finalsalary:any |undefined;

//service:any=SalaryCalculatorService;

constructor(private service:SalaryCalculatorService){}
display()
{
this.finalsalary=this.service.CalculateSalary(this.netsalary);
}


}
