import { LoginService } from './../Service/loginservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Loginf} from "./loginf"
import {Router} from "@angular/router"

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

  constructor(private router:Router, private fb:FormBuilder,private loginservice:LoginService) {
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

    console.log(f.get('Username')?.value)
    console.log(f.get('Password')?.value)
    this.router.navigate(['/Home'])
  }

}
