import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router"
import { UserService } from 'src/app/service/user.service';
import {HttpClient} from '@angular/common/http'
import { first } from 'rxjs/operators';
import {LocationStrategy} from '@angular/common'
import { HomeComponent } from '../home/home.component';
// import {HomeComponent} from './../home/home.component'
// import { LoginService } from '../Service/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata!: any;
  loginForm!: FormGroup;
  loginForms:Array<any>  =[];
  Data:Array<any> =[];
  state:string =" ";
  role:string = " ";
  public statusback:boolean = true;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private userservice:UserService,
    private http:HttpClient,
    private route: ActivatedRoute,
    private location:LocationStrategy,
    // private Home:HomeComponent
    ) {
      // console.log(history.state.data)

    if (history.state.data==false) {
      // console.log(history.state.data)
      history.pushState(null, "null", window.location.href)
      this.location.onPopState(() => {
        history.pushState(null, "null", window.location.href);
      }
      )
    }
    this.logindata = this.fb.group({
      Username: [''],
      Password: ['']
    })
    
    this.loginForm = this.fb.group({
      Username: [''],
      Password: ['']
    })

  }

  ngOnInit(): void {
    try{
      console.log(history.state.data)
    }
    catch (e){
      console.warn(e)
    }
  }

  onSubmit(f:FormGroup){
    this.logindata.username = f.get('Username')?.value
    this.logindata.password = f.get('Password')?.value

    let regex = /\d/;
    // console.log(this.Data)
    if(f.get('Username')?.value=="" || null){
      this.state = "please enter your username"
    }
    else if (f.get('Password')?.value == "" || null) {
      this.state = "please enter your password"
    }

    if (this.logindata.username.match("^[a-zA-Z]+$"))
    {
      console.log("Tearcher")
      this.userservice.login_as_teacher(this.logindata.username,this.logindata.password).pipe(first()).subscribe({
        next: () => {
          if (this.userservice.state == true) {

            const returnUrl = this.route.snapshot.queryParams['/Home']

            this.userservice.getCourse().subscribe();
            console.log("true")
            this.router.navigate(['/Home'])
          }
          else {
            this.state = "Incorrect username or password.Please try again."
          }
        }
      })
    }
    else {
      this.userservice.login_as_student(this.logindata.username, this.logindata.password).pipe(first()).subscribe({
        next: () => {
          // console.log("User valid")
          if (this.userservice.state == true) {

            const returnUrl = this.route.snapshot.queryParams['/Home']

            this.userservice.getCourse().subscribe();
            console.log("true")
            this.router.navigate(['/Home'])
          }
          else {
            this.state = "Incorrect username or password.Please try again."
          }

        },
        error: error => {

        }
      }
      )
    }

    // this.router.navigate(['/Home'])
  //  }




  }
}
