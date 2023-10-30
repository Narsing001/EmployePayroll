import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceComponent } from './Pages/advance/advance.component';
import { AtendanceComponent } from './Pages/atendance/atendance.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeComponent } from './Pages/employe/employe.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { LevesComponent } from './Pages/leves/leves.component';
import { LoginorSigninComponent } from './Pages/loginor-signin/loginor-signin.component';
import { SalaryComponent } from './Pages/salary/salary.component';

const routes: Routes = [
{
  path:'',component:LoginorSigninComponent
},
{path:'Login',
  component:LoginorSigninComponent
},
{path:'',component:LayoutComponent,children:[
  {
    path:'Dashboard',component:DashboardComponent
  },
   {
     path:'Employe',component:EmployeComponent
   },
   {
    path:'Atendance',component:AtendanceComponent
  },
  {
    path:'Salary',component:SalaryComponent
  },
  {
    path:'Leves',component:LevesComponent
  },
  {
    path:'Advance',component:AdvanceComponent
  },
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
