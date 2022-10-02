import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AllEmployeeComponent } from './components/all-employee/all-employee.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ApproveDenyComponent } from './components/approve-deny/approve-deny.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'all-employee', component:AllEmployeeComponent},
  {path:'apply-leave', component:ApplyLeaveComponent},
  {path:'approve-deny', component:ApproveDenyComponent},
  {path: 'status', component:StatusComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
