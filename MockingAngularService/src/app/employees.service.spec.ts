import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import {Employee} from './employee';

//import the below packages
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

fdescribe('EmployeesService', () => {
  let service: EmployeesService;
  let httpSpy: Spy<HttpClient>;
  let mockEmployees: Employee[] = [
    {
      id: "1",
      name: "Ram",
      email: "Ram@gmail.com"
    },
    {
      id: "2",
      name: "Sham",
      email: "sham@gmail.com"
    },
    {
      id: "3",
      name: "Raj",
      email: "raj@gmail.com"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      //add the configuration
      providers: [
        EmployeesService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });
    service = TestBed.inject(EmployeesService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an expected list of employees', (done: DoneFn) => {
    httpSpy.get.and.nextWith(mockEmployees);

    service.getAllEmployees().subscribe(
      emp => {
        expect(emp).toHaveSize(mockEmployees.length);
        done();
      },
      done.fail
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should return an expected employee info given an existing employee id', (done: DoneFn) => {

    var employeeId = "2";
    var expectedEmployee:any = mockEmployees.find(c => c.id == employeeId);

    httpSpy.get.and.nextWith(expectedEmployee);

    service.getEmployee(employeeId).subscribe(
      emp => {
        expect(emp).toEqual(expectedEmployee);
        done();
      },
      done.fail
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should return a 404', (done: DoneFn) => {

    var employeeId = "70001";

    httpSpy.get.and.throwWith(new HttpErrorResponse({
          error: "404 - Not Found",
          status: 404
    }));

    service.getEmployee(employeeId).subscribe(
      emp => {
        done.fail("Expected a 404");
      },
      error => {
        expect(error.status).toEqual(404);
        done();
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });
});
