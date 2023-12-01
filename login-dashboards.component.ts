import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-dashboards',
  templateUrl: './login-dashboards.component.html',
  styleUrls: ['./login-dashboards.component.css']
})
export class LoginDashboardsComponent {
  constructor(private http:HttpClient,private router:Router){}
  attendance(){
    if(localStorage.getItem('user_role')=='mentor'){
      this.router.navigate([`attendance`])

    }
    else{
      this.router.navigate(['/attendance/'+localStorage.getItem('roll_no')])
    }
  }
  assignments(){
    this.router.navigate([`assignments`])
  }
  academics(){
    this.router.navigate([`academics`])
    if(localStorage.getItem("user_role")=='student'){
      this.router.navigate(['academics/student/'+localStorage.getItem("user_id")])
    }
    else{
      this.router.navigate(['academics/all_students/'+localStorage.getItem('user_id')])
    }

  }
  chats(){
    this.router.navigate([`chats`])
  }
}

