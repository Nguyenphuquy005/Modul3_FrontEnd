import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {EmployeeListComponent} from './components/employees/employee-list/employee-list.component';
import { CreatEmployeeComponent} from './components/employees/creat-employee/creat-employee.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';
import {FormsModule} from '@angular/forms';



const routers: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-list/:id', component: EmployeeListComponent},
  {path: 'create-employee', component: CreatEmployeeComponent},
  {path: 'update-employee', component: UpdateEmployeeComponent},
  {path: '**', component: PageNotFoundComponent},
];
@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent , CreatEmployeeComponent, UpdateEmployeeComponent,],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers),
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
