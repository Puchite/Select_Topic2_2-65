import { LoginService } from './../Service/loginservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Loginf} from "./loginf"
import {ActivatedRoute, Router} from "@angular/router"
import { UserService } from 'src/app/service/user.service';
import {HttpClient} from '@angular/common/http'
import { first } from 'rxjs/operators';


// import { LoginService } from '../Service/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata!: Loginf;
  loginForm!: FormGroup;
  loginForms:Array<Loginf>  =[];
  Data:Array<any> =[];
  state:string =" ";
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private loginservice:LoginService,
    private userservice:UserService,
    private http:HttpClient,
    private route: ActivatedRoute) {
    this.logindata = new Loginf("6204062616103","1129700214653")
    this.loginForm = this.fb.group({
      Username: [''],
      Password: ['']
    })
    this.loginForms = this.loginservice.getData()
  }

  ngOnInit(): void {

  }

  onSubmit(f:FormGroup){
    this.logindata.username = f.get('Username')?.value
    this.logindata.password = f.get('Password')?.value


    // console.log(this.Data)
    if(f.get('Username')?.value==""){
      this.state = "please enter your username"
    }
    else if (f.get('Password')?.value == "") {
      this.state = "please enter your password"
    } else {
      this.userservice.login(this.logindata.username, this.logindata.password).pipe(first()).subscribe({
        next: () => {
          // console.log("User valid")
          if (this.userservice.state == true) {
            console.log("true")
            const returnUrl = this.route.snapshot.queryParams['/Home']
            this.userservice.getCourse();
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
