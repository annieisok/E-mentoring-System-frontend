import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uplaods: any;
  private unsubscriber : Subject<void> = new Subject<void>();
  showErrorModal: any;
  ngOnInit(){
    history.pushState(null, '');

  fromEvent(window, 'popstate').pipe(
    takeUntil(this.unsubscriber)
  ).subscribe((_) => {
    history.pushState(null, '');
    this.showErrorModal(`You can't make changes or go back at this time.`);
  });
    let x= screen.availHeight;
    console.log(x)
  }
  respo:any;
  constructor(private router:Router,private http:HttpClient){}

  login_verify(data:any){
    console.log("data",data)
    let verify_data={
      username:(data.input1.split(' '))[0],
      password:data.input2
    };

    console.log(verify_data,"data")
    this.http.post('http://localhost:3000/',verify_data).subscribe(res=>{

      if(Object.keys(res)[0]=='true'){
        localStorage.setItem('username',verify_data.username)
        localStorage.setItem('password',verify_data.password)
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
        this.router.navigate([`/dashboard`])
        document.getElementById('invalid')?.setAttribute('style','display:none;color:red')
      }
      else{
        console.log("Invalid Username or Password")
        document.getElementById('invalid')?.setAttribute('style','display:block;color:red')
        setTimeout(()=>{
          document.getElementById('invalid')?.setAttribute('style','display:none;color:red')
        },2000)
      }
    })

  }
  signup(event:any){
    event.target.style.opacity=1
  }
  signup_leave(event:any){
    event.target.style.opacity=0.3
  }
  register(){
    console.log("inside")
    this.router.navigate(['/register'])
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
