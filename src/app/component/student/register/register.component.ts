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
  displayedColumns = ['Course_ID', 'Course_Name', 'Course_Credit'];
  dataSource = new MatTableDataSource<Course>(this.elementData);
  selection = new SelectionModel<Course>(true, []);

  DataTable : any = document.querySelector('#table');

  constructor(private userservice: UserService) {
    this.course = this.userservice.courseValue;
    console.log("local storage('course')",localStorage.getItem('course'));
    // this.courseData = this.course.reduce(
    //   (obj: any, item: { tags: any; }) => Object.assign(obj, { [item.tags]: item.tags })
    // )
    this.courseData = (JSON.parse(localStorage.getItem('course') || '{}'));
    // this.courseData = Object.assign(this.course, this.course)
    // this.elementData = this.courseData;
    console.log(this.courseData);
    // console.log(typeof(localStorage.getItem('course')));
    if(this.month>5&&this.month<11){
      this.term="1"
    }
    else if(this.month==12||this.month<4){
      this.term="2"
    }
    else{
      this.term="ปิดเทอม"
    }
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

  GetData(ID : string) : void {
    console.log(ID)
  }
}
