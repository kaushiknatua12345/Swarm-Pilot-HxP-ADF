import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from '../app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private readonly URL: string = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  public getAllEmployees(): Observable<any> {
    return this.httpClient.get<Employee[]>(this.URL);
  }

  public getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.URL}/${id}`);
  }
}
