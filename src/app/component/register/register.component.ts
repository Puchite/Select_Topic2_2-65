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
  dataSource = new MatTableDataSource<any>(this.elementData);
  selection = new SelectionModel<any>(true, []);

  constructor(private userservice: UserService) {
    this.course = this.userservice.courseValue;
    this.courseData = this.course.reduce(
      (obj: any, item: { tags: any; }) => Object.assign(obj, { [item.tags]: item.tags })
    )

    this.elementData = this.course;
    console.log("course ",this.elementData[0]);

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

}
