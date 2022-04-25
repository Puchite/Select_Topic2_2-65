import { LoginService } from './../Service/loginservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Loginf} from "./loginf"
import {Router} from "@angular/router"
import { UserService } from 'src/app/service/user.service';

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

  constructor(private router:Router, private fb:FormBuilder,private loginservice:LoginService, private userservice:UserService) {
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
    //Bug cannot find username
    this.logindata.username = f.get('Username')?.value
    this.logindata.password = f.get('Password')?.value
    console.log(f.get('Username')?.value)
    console.log(f.get('Password')?.value)
    let data:any = (this.userservice.login(this.logindata.username, this.logindata.password))
    console.log(data)
    this.router.navigate(['/Home'])
  }

}
