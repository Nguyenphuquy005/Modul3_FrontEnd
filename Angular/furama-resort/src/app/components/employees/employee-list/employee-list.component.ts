import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import {Employee} from '../../../module/employee.class';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees ;
  public isdialog = false;
  public isedit = false;
  public isdelete = false;
  id: number;
  fullName: string;
  position: string;
  academicLevel: string;
  part: string;
  dateOfBirth: string;
  salary: string;
  email: string;
  phoneNumber: string;
  address: string;
  public employee: Employee[];
  public update: Employee = null ;
  constructor(
    public employeeService: EmployeeService,
  ) { }
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data ;
      console.log(this.employees) ;
    });
  }
  editEmployee(employeeService: Employee) {
    this.isdialog = true;
    this.isedit = true;
    this.isdelete = false;
    this.update = employeeService;
   }
  close() {
    this.isdialog = false ;
  }
  updateemployee(newupdate: Employee) {
    newupdate = this.update;
    console.log(newupdate);
    this.employeeService.updateEmployee(newupdate, this.id).subscribe(data => {
      console.log(data);
    });
  }
  deleteEmployee(employeeService: object) {
    this.isdialog = true;
    this.isdelete = true;
    this.isedit = false;
  }
  deleteAction(){
  }


}
