import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
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

  it(`should have as title 'Protractor Sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const nativeElement=fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('#title').textContent).toContain('Protractor Sample');
  });

  it('Should Route To Contact Us Component',
  async() => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  let href=fixture.debugElement.query(By.css('#ContactUs')).nativeElement
  .getAttribute('href');
  fixture.whenStable().then(() => {
    expect(href).toEqual('/ContactUs');

  });
  });


});
