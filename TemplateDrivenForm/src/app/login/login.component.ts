import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup | any;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.myForm =
      this.fb.group({
       username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid)
    {
      this.router.navigateByUrl('update');
    }
  }

}
