import { Component,OnInit } from '@angular/core';
//Import for working with Reactive Forms
import{FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title="New Employee Registration Form";
  employeeRegistrationForm:any;
  message:string | undefined;

  ngOnInit(): void {
    this.employeeRegistrationForm=new FormGroup(
      {
        employeeName:new FormControl('',[
          Validators.required,Validators.minLength(6),
        ]),
        emailId:new FormControl('',[
          Validators.required
        ]),
        employeeCode:new FormControl('',[
          Validators.required
        ])

      });
  }


  public SubmitForm()
  {
    if(this.employeeRegistrationForm.valid)
    {
      this.message="Form Submitted Successfully";
    }
  }

}
