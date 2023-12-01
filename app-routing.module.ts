import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginDashboardsComponent } from './login-dashboards/login-dashboards.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AcademicsComponent } from './academics/academics.component';
import { AttendanceStudentComponent } from './attendance-student/attendance-student.component';
import { MentorAcademicsComponent } from './mentor-academics/mentor-academics.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:LoginDashboardsComponent},
  {path:'register',component:RegisterComponent},
  {path:'chats',component:DashboardComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'assignments',component:AssignmentsComponent},
  {path:'academics/student/:_id',component:AcademicsComponent},
  {path:'attendance/:roll_no',component:AttendanceStudentComponent},
  {path:'academics/all_students/:_id',component:MentorAcademicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
