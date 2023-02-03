import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { DisplaySalaryComponent } from './display-salary.component';
import {SalaryCalculatorService} from '../salary-calculator.service';
import { By } from '@angular/platform-browser';

xdescribe('DisplaySalaryComponent', () => {
  let component: DisplaySalaryComponent;
  let fixture: ComponentFixture<DisplaySalaryComponent>;
  let service:SalaryCalculatorService;
  let testSpy:any;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySalaryComponent ],
      providers:[SalaryCalculatorService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySalaryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(SalaryCalculatorService);
    testSpy=spyOn(service,'CalculateSalary').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test Whether Spy has called method',()=>{
    debugElement
    .query(By.css('button.display'))
    .triggerEventHandler('click', null);

  expect(testSpy).toHaveBeenCalled();
  });

  it('Test Net Salary Via Spy',()=>{
    debugElement
    .query(By.css('button.display'))
    .triggerEventHandler('click', null);

  expect(testSpy(5000)).toBe(60000);

  });
});
