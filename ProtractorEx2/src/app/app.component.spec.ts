import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hyland HRM Portal');
  });

  it('Should Route To About Us Component',
  async() => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  let href=fixture.debugElement.query(By.css('#AboutUs')).nativeElement
  .getAttribute('href');
  fixture.whenStable().then(() => {
    expect(href).toEqual('/AboutUs');
    //console.log('after expect');
  });
  });

  it('Should Route To Registration Component',
  async() => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  let href=fixture.debugElement.query(By.css('#Registration')).nativeElement
  .getAttribute('href');
  fixture.whenStable().then(() => {
    expect(href).toEqual('/Registration');
    //console.log('after expect');
  });
  });

  it('Should Route To Salary Info Component',
  async() => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  let href=fixture.debugElement.query(By.css('#SalaryInfo')).nativeElement
  .getAttribute('href');
  fixture.whenStable().then(() => {
    expect(href).toEqual('/SalaryInfo');
    //console.log('after expect');
  });
  });

  it('Should Route To Contact Us Component',
  async() => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  let href=fixture.debugElement.query(By.css('#ContactUs')).nativeElement
  .getAttribute('href');
  fixture.whenStable().then(() => {
    expect(href).toEqual('/ContactUs');
    //console.log('after expect');
  });
  });

});
