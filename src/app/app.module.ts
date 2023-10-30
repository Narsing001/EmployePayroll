import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginorSigninComponent } from './Pages/loginor-signin/loginor-signin.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { EmployeComponent } from './Pages/employe/employe.component';
import { AdvanceComponent } from './Pages/advance/advance.component';
import { AtendanceComponent } from './Pages/atendance/atendance.component';
import { LevesComponent } from './Pages/leves/leves.component';
import { SalaryComponent } from './Pages/salary/salary.component';
import { HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginorSigninComponent,
    DashboardComponent,
    LayoutComponent,
    EmployeComponent,
    AdvanceComponent,
    AtendanceComponent,
    LevesComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
