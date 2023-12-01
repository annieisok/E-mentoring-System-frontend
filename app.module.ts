import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginDashboardsComponent } from './login-dashboards/login-dashboards.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AcademicsComponent } from './academics/academics.component';
import { AttendanceStudentComponent } from './attendance-student/attendance-student.component';
import { MentorAcademicsComponent } from './mentor-academics/mentor-academics.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LoginDashboardsComponent,
    AttendanceComponent,
    AssignmentsComponent,
    AcademicsComponent,
    AttendanceStudentComponent,
    MentorAcademicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
