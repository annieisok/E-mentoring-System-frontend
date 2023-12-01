import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attendance-student',
  templateUrl: './attendance-student.component.html',
  styleUrls: ['./attendance-student.component.css']
})
export class AttendanceStudentComponent {
  mentor_check:Boolean=false;
  roll_no: any | undefined;
  attendance_array:any[]=[];
  student_data: any;
  user_role: any;
  updated_attendence_value:any;
  role:any;
  currentweek: any;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.updated_attendence_value=null;
    this.role=localStorage.getItem('user_role')
    this.roll_no=this.route.snapshot.paramMap.get('roll_no')
    if(localStorage.getItem('user_role')){
      this.mentor_check=true;
      console.log("mentor role is assigned to this user",this.mentor_check,"with roll_no",this.route.snapshot.paramMap.get('roll_no'))
    }
    this.http.get("http://localhost:3000/roll_no/"+this.roll_no).subscribe(res=>{
      this.user_role=res

      this.student_data=res;
      this.attendance_array=this.student_data['attendence']
    })


  }
  updated_Attendence(x:any){
    console.log(x,"update",this.updated_attendence_value)
    console.log(this.attendance_array)
    this.attendance_array[x-1]=this.updated_attendence_value;
    this.http.post("http://localhost:3000/update_attendance",{
      attendence:this.attendance_array,
      _id:this.student_data._id
    }).subscribe(res=>{
      this.close();
      this.ngOnInit();
    })

    }
  get_attendence(x:any){
    return this.attendance_array[x-1]

  }
  verify(){
    console.log(localStorage.getItem('user_role'),"role 1121221")
    if(localStorage.getItem('user_role')=='mentor'){
      return true
    }
    return false
  }
  update_Attendance(x:any){
    this.currentweek=x;
    document.getElementsByClassName('mode')[0].setAttribute('style','display:block')
    for(var i=1;i<17;i++){

      var y= document.getElementById(i.toString())
      y?.setAttribute('disabled','true')

    }
  }
  close(){
    document.getElementsByClassName('mode')[0].setAttribute('style','display:none')
    for(var i=1;i<17;i++){

      var y= document.getElementById(i.toString())
      y?.removeAttribute('disabled')

    }
  }
}
