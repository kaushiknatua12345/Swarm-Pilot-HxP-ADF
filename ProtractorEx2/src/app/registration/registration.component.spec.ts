import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


fdescribe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports:[FormsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Registration Component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Trainee Registration Form'`, () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('New Employee Registration Form');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('New Employee Registration Form');
  });

  /* Failed test cases */
  it('Employee Name - Check | No Data Supplied But Input Field is Touched',()=>
  {
    let employeename=component.employeeRegistrationForm.controls['employeeName'];
    employeename.setValue('');
    expect(employeename.errors['required']).toBe(true,'Error Message is displayed');
    expect(component.employeeRegistrationForm.valid).toBeFalsy();
  });

it('Employee Name - Check | Minimum Length Is Not Matched',()=>
  {
    let employeename=component.employeeRegistrationForm.controls['employeeName'];
    employeename.setValue('Sam');
    expect(employeename.valid).toBe(false,'Data is Not Valid as Minimum Length Does Not Match');
    expect(component.employeeRegistrationForm.valid).toBeFalsy();
  });

  it('Email - Check | No Data Supplied But Input Field is Touched',()=>
  {
    let email=component.employeeRegistrationForm.controls['emailId'];
    email.setValue('');
    expect(email.errors['required']).toBe(true,'Error Message is displayed');
    expect(component.employeeRegistrationForm.valid).toBeFalsy();
  });


  it('Employee Code - Check | No Data Supplied But Input Field is Touched',()=>
  {
    let employeeCode=component.employeeRegistrationForm.controls['employeeCode'];
    employeeCode.setValue('');
    expect(employeeCode.errors['required']).toBe(true,'Error Message is displayed');
    expect(component.employeeRegistrationForm.valid).toBeFalsy();
  });

  //All Fields Are Valid
  it('When All Fields Are Valid, Form Should be submitted Successfully',()=>{
    let employeeName=component.employeeRegistrationForm.controls['employeeName'];
    let emailid=component.employeeRegistrationForm.controls['emailId'];
    let employeeCode=component.employeeRegistrationForm.controls['employeeCode'];
    employeeName.setValue('Samuel');
    emailid.setValue('sam@gmail.com');
    employeeCode.setValue('123456');
    component.SubmitForm();
    fixture.detectChanges();
    let successMsg=fixture.debugElement.query(By.css('#success-msg'));
    expect(successMsg.nativeElement.innerText).toBe(component.message);
  });





});
