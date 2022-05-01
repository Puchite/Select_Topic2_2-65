import { Course } from '../../../models/course';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date = new Date();
  month = (new Date()).getMonth();
  term:string="1";
  course!:any;
  courseData:any;
  elementData!:any;
  ID_register:string[] =[];
  displayedColumns = ['Course_ID', 'Course_Name', 'Course_Credit'];
  dataSource = new MatTableDataSource<Course>(this.elementData);
  selection = new SelectionModel<Course>(true, []);
  Data:any;
  DataTable : any = document.querySelector('#table');


  coursebyyears(element: any,index: any,array: any){
    console.log(this.Data)
    return element <=this.Data.Years
  }
  constructor(private userservice: UserService) {
    this.course = this.userservice.courseValue;
    this.courseData = (JSON.parse(localStorage.getItem('course') || '{}'));
    this.Data = JSON.parse(localStorage.getItem('user') || '{}').reduce(
      (obj: any, item: { Student_ID: any; }) => Object.assign(obj, { [item.Student_ID]: item.Student_ID })
    )
    console.log(this.Data)
    console.log(this.courseData);
    this.courseData = this.courseData.filter(
      (item:any)=> item.Years<=this.Data.Years
    )
    // console.log(this.courseData[0].Semester)
    this.courseData = this.courseData.filter(
      (item:any)=> item.Semester==this.term
    )
    console.log(this.courseData)
     //MockData for testing
    this.term="1"
    //*******ห้ามลบ ********//
    // if(this.month>5&&this.month<11){
    //   this.term="1"
    // }
    // else if(this.month==12||this.month<4){
    //   this.term="2"
    // }
    // else{
    //   this.term="ปิดเทอม"
    // }
  }

  isAllSelected()
  {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  masterToggle()
  {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(
      row => this.selection.select(row));
  }

  ngOnInit(): void {
  }
  // checkhave(id:string){
  //   for(let i = 0 ;i<)
  // }
  GetData(event :any,ID : string) : void {
    // console.log(event.target.checked)
    if(event.target.checked&&!this.ID_register.includes(ID)){
      // console.log(this.ID_register.indexOf(ID))
      this.ID_register.push(ID)
    }
    else{
      this.ID_register.splice(this.ID_register.indexOf(ID))
    }
  }
  Onclick(){
    console.log(this.ID_register)
  }
}
