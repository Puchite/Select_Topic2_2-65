import { Course } from './../../models/course';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  course!:any;
  courseData:any;
  elementData!:any;
  displayedColumns = ['select', 'Course_ID', 'Course_Name', 'Course_Credit'];
  dataSource = new MatTableDataSource<Course>(this.elementData);
  selection = new SelectionModel<Course>(true, []);


  constructor(private userservice: UserService) {
    this.course = this.userservice.courseValue;
    console.log("local storage('course')",localStorage.getItem('course'))
    // this.courseData = this.course.reduce(
    //   (obj: any, item: { tags: any; }) => Object.assign(obj, { [item.tags]: item.tags })
    // )
    this.elementData = this.course;
    console.log("course ",this.elementData);
    console.log("course_ID ",this.elementData.Course_ID);

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
    console.log("element is ",this.elementData);
  }

}
