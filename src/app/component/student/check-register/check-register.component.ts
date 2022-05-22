import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-check-register',
  templateUrl: './check-register.component.html',
  styleUrls: ['./check-register.component.css']
})
export class CheckRegisterComponent implements OnInit {

  registerData: any;
  selectSemeter:any;
  selectSemeterForm: any;
  studentData:any;
  studentYear:any;
  year = new Date().getFullYear()+543;
  optionForm : any = []

  constructor(private userservice:UserService) {
    this.studentData = JSON.parse(localStorage.getItem('user')|| '{}')[0];
    // let chunksSemeter = this.selectSemeter.split('/')
    // this.userservice.getRegisterResult(this.studentData.Student_ID, chunksSemeter[1], chunksSemeter[0])
    // .subscribe((data =>{
    //   this.studentData = data;
    // }));
    // console.log(this.studentData);
    for(let i=this.studentData.Years; i>0; i--)
    {
      this.optionForm.push(`1/${this.year-i}`)
      this.optionForm.push(`2/${this.year-i}`)
    }
  }

  ngOnInit(): void {
    console.log(this.registerData);
  }

  changeSemeter(e:any)
  {
    this.selectSemeter = e.target.value
    let chunksSemeter = this.selectSemeter.split('/')
    this.userservice.getRegisterResult(this.studentData.Student_ID, chunksSemeter[1], chunksSemeter[0])
    .subscribe(data =>{
      this.registerData = data;
    });

    console.log("register data is ",this.registerData);
    // let chunksSemeter = this.selectSemeter.split('/')
    // this.userservice.getRegisterResult(this.studentData.Student_ID, chunksSemeter[1], chunksSemeter[0]).subscribe();
    // this.registerData = JSON.parse(localStorage.getItem('registerResult')|| '{}');

  }
}
