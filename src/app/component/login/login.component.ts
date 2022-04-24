import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      userName: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
