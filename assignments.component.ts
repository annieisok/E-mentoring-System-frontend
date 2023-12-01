import { HttpClient } from '@angular/common/http';
import { Component,ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignmentsComponent {
  upload_info:any;
  respo:any;
  uplaods:any;
  user_role:any;
  ngOnInit(){
    this.user_role=localStorage.getItem("user_role")
    this.upload_info=localStorage.getItem('uploads')?.split(",")
    if(this.upload_info[0]==''){this.upload_info=[]}
    this.http.get("http://localhost:3000/username/"+localStorage.getItem('username')).subscribe((responseee)=>{
      this.respo=responseee
      console.log(this.respo)
    localStorage.setItem('user_role',this.respo['role'])
    localStorage.setItem('roll_no',this.respo['roll_no'])
    localStorage.setItem("user_id",this.respo['_id'])
    if(localStorage.getItem('user_role')=='mentor'){
      localStorage.setItem('uploads',this.respo['uploads'])
      console.log("uploads are",localStorage.getItem('uploads')?.split(','),this.respo['uploads'])

    }
    else{
      this.http.get('http://localhost:3000/find_mentor/'+this.respo['mentor_id']).subscribe(resppp=>{
      this.uplaods=resppp
      console.log(resppp,"uploads")
      localStorage.setItem('uploads',this.uplaods[0]['uploads'])
      console.log(localStorage.getItem('uploads')?.split(','))
      })

    }

    })
  }
  constructor(private http:HttpClient,private router:Router){}
  length(){
    if(this.upload_info?.length>1){
      return true
    }
    return false
  }
 file(event:any){

  let formdata=new FormData;
  formdata.append('file',event.target.files[0])
  console.log(formdata.get('file'),"file")
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
 download(upload:any){
  console.log(upload)
    let download=document.createElement('a')
    download.setAttribute('download','')
    download.href='../../assets/uploaded files/Dragon_Ball_Xenoverse_2_L.torrent'
    download.click()
 }
}
