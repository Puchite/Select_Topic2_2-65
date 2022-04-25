import { LoginService } from './../Service/loginservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Loginf} from "./loginf"
import {Router} from "@angular/router"
import { UserService } from 'src/app/service/user.service';
import {HttpClient} from '@angular/common/http'

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
  constructor(private router:Router, private fb:FormBuilder,private loginservice:LoginService, private userservice:UserService,private http:HttpClient) {
    this.logindata = new Loginf("6204062616103","1129700214653")
    this.loginForm = this.fb.group({
      Username: [''],
      Password: ['']
    })
    this.loginForms = this.loginservice.getData()
  }

  ngOnInit(): void {
    this.userservice.login(this.logindata.username, this.logindata.password).subscribe(data=>{
      this.Data.push(data)
      this.Data = this.Data[0]

    })
  }

  onSubmit(f:FormGroup){
    //Bug cannot find username
    this.logindata.username = f.get('Username')?.value
    this.logindata.password = f.get('Password')?.value
<<<<<<< HEAD
    console.log(f.get('Username')?.value)
    console.log(f.get('Password')?.value)
    let data:any = (this.userservice.login(this.logindata.username, this.logindata.password))
    console.log(data)
    this.router.navigate(['/Home'])
  }
=======
>>>>>>> 19b93a534573bd883bda03df41b70eb3801b892c


    // console.log(this.Data)
    if(f.get('Username')?.value==""){
      this.state = "please enter your username"
    }
    else if(f.get('Password')?.value==""){
      this.state = "please enter your password"
    }else {
      for(let i = 0;i<this.Data.length;i++){
        if(this.logindata.username === this.Data[i].Student_ID&&this.logindata.password===this.Data[i].Password){
            this.router.navigate(['/Home'])
        }
        else{
          this.state = "Incorrect username or password.Please try again."
        }
      }

    // this.router.navigate(['/Home'])
   }
  }
}
