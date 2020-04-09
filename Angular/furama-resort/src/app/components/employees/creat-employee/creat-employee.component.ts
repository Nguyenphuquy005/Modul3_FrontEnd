import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {Employee} from '../../../module/employee.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.css']
})
export class CreatEmployeeComponent implements OnInit {
  public router: Router;
  public fullName: string;
  position: string;
  academicLevel: string;
  part: string;
  dateOfBirth: string;
  salary: string;
  email: string;
  phoneNumber: string;
  address: string;
  public new123: object = {
    fullName: '',
    position: '',
    academicLevel: '',
    part: '',
    dateOfBirth: '',
    salary: '',
    email: '',
    phoneNumber: '',
    address: '',
  };
  list: string;

  constructor(public  employeeService: EmployeeService) {
  }

  ngOnInit(): void {

  }

  onAddEmployee() {
    this.new123 = {
      fullName: this.fullName,
      position: this.position,
      academicLevel: this.academicLevel,
      part: this.part,
      dateOfBirth: this.dateOfBirth,
      salary: this.salary,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address
    };
    this.employeeService.addEmployee(this.new123).subscribe(data => {
     // this.router.navigateByUrl('employee-list');
    });
  }
}

