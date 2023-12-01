import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-academics',
  templateUrl: './mentor-academics.component.html',
  styleUrls: ['./mentor-academics.component.css']
})
export class MentorAcademicsComponent {
  mentee_info:any;
  ngOnInit(){
    this.http.get("http://localhost:3000/find_student/"+this.route.snapshot.paramMap.get("_id")).subscribe(res=>{
        this.mentee_info=res;
        console.log(res)
    })
  }
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){}
  academics_student(id:any){
    console.log("id is ",id)
    this.router.navigate([`academics/student/`+id])
  }

}
