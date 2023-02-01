import { Component,OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title="Employee Registration";
  constructor() { }

  RegistrationForm:any;
  message:any;

  ngOnInit() {
    this.RegistrationForm=new FormGroup(
      {
        EmployeeName:new FormControl('',[
          Validators.required,
        ]),
        EmployeeCode:new FormControl('',[
          Validators.required
        ]),
        Department:new FormControl('',[
          Validators.required
        ])
      });
  }

  public SubmitForm()
  {
    if(this.RegistrationForm.valid)
    {
      this.message="Registration successfully";
    }
  }


}
