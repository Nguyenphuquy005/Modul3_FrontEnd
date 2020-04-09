import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Employee } from '../module/employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
     public API = ' http://localhost:3000/employees' ;
  constructor(
    public http: HttpClient
  ) { }
  getAllEmployees(): Observable<any>{
    return this.http.get(this.API) ;
  }

  addEmployee(newEmployee: object): Observable<Employee> {
    // @ts-ignore
    return  this.http.post(this.API, newEmployee);
  }
  updateEmployee(employee, id): Observable<any>{
    // @ts-ignore
    return this.http.put(this.API + '/' + id, employee);
  }
  deleteEmployee(employee: object): Observable<Employee>{
    // @ts-ignore
    return this.http.delete(this.API, employee);
  }
}
