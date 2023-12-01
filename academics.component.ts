import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
  student_info:any;
  student_uploads: any;
  user_role: any=localStorage.getItem('user_role');

  ngOnInit(){
    this.http.get("http://localhost:3000/"+this.route.snapshot.paramMap.get('_id')).subscribe(resp=>{
      console.log(resp,"user")
      this.student_info=resp;
      this.student_uploads=this.student_info['uploads'];

    })
    // this.http.get("http://localhost:3000/username/"+this.route.snapshot.paramMap.get('_id')).subscribe(res=>{
    //   console.log(res)
    //   this.student_info=res;
    //   this.student_uploads=this.student_info['uploads'];
    //   this.user_role=this.student_info.role;

    // })
  }
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){}
  file_upload(event:any){
    let formdata=new FormData();
    formdata.append('file',event.target.files[0])
    this.http.post('http://localhost:3000/file',formdata).subscribe(res=>{
      console.log("Response",res)
      this.ngOnInit()
    })
    this.http.post('http://localhost:3000/update_uploads',{
      _id:localStorage.getItem("user_id"),
      name:event.target.files[0].name
    }).subscribe(res=>{
      console.log(res)
    })
  }
}
