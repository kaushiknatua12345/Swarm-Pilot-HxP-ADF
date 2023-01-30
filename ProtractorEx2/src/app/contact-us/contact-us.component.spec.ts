import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUSComponent } from './contact-us.component';

describe('ContactUSComponent', () => {
  let component: ContactUSComponent;
  let fixture: ComponentFixture<ContactUSComponent>;

  //setup
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { //test case in jasmine is known as spec
    expect(component).toBeTruthy();
  });

  it('should have a title', () => { //test case in jasmine is known as spec
    let titleExpected:any='Hyland India Contact Service';
    expect(component.title).toEqual(titleExpected);
  });

  it('title is present in h2 tag', () => { //test case in jasmine is known as spec
    let titleExpected:any='Hyland India Contact Service';
    const nativeElement=fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('h2').textContent).toContain('Hyland India Contact Service');
  });

  it('location is present in p tag', () => { //test case in jasmine is known as spec

    const nativeElement=fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('p').textContent).toContain('DLF1 IT Park, New Town');
  });

  it('contact number is present in p tag having id selector', () => { //test case in jasmine is known as spec

    const nativeElement=fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('#phone').textContent).toContain('960019');
  });
});
