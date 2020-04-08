import { Component, OnInit } from '@angular/core';
import {  HttpResponse } from '@angular/common/http';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  public API = ' http://localhost:3000/employees/add-new-employee' ;
   employeeObj: object = {} ;
  addNewEmployee(value: any)  {
    }
    constructor() { }
  ngOnInit(): void {
  }

}
