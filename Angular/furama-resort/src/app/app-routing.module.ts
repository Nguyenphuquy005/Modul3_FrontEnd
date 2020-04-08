import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { AddNewEmployeeComponent } from './components/employees/add-new-employee/add-new-employee.component' ;
import {FormsModule} from '@angular/forms';


const  routers: Routes = [
  {path: '' , component: HomeComponent} ,
{path: 'employee-list' , component: EmployeeListComponent} ,
{path: 'add-new-employee' , component: AddNewEmployeeComponent} ,
{path: '**' , component: PageNotFoundComponent} ,
];

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent, AddNewEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
