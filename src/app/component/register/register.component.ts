import { Course } from './../../models/course';
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

  course!:any;
  courseData:any;
  elementData!:any;
  displayedColumns = ['Course_ID', 'Course_Name', 'Course_Credit'];
  dataSource = new MatTableDataSource<Course>(this.elementData);
  selection = new SelectionModel<Course>(true, []);

  DataTable : any = document.querySelector('#table');

  constructor(private userservice: UserService) {
    this.course = this.userservice.courseValue;
<<<<<<< HEAD
    this.courseData = this.course.reduce(
      (obj: any, item: { tags: any; }) => Object.assign(obj, { [item.tags]: item.tags })
    )
    this.elementData = this.courseData;
    console.log("course ",this.elementData);
    console.log("course_ID ",this.elementData.Course_ID);

=======
    console.log("local storage('course')",localStorage.getItem('course'));
    // this.courseData = this.course.reduce(
    //   (obj: any, item: { tags: any; }) => Object.assign(obj, { [item.tags]: item.tags })
    // )
    this.courseData = (JSON.parse(localStorage.getItem('course') || '{}'));
    // this.courseData = Object.assign(this.course, this.course)
    // this.elementData = this.courseData;
    console.log(this.courseData);
    // console.log(typeof(localStorage.getItem('course')));
>>>>>>> 126ed19973d920e5b06ce2ebbc032bec9e27edb2
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
<<<<<<< HEAD

=======
    // let Table = document.createElement('table');
    // let Header = document.createElement('tr');

    // this.displayedColumns.forEach(text => {
    //   let EachHeader = document.createElement('th');
    //   let EachText = document.createTextNode(text);
    //   EachHeader.appendChild(EachText);
    //   Header.appendChild(EachHeader);
    // })

    // Table.appendChild(Header);

    // this.courseData.forEach((Data: { [s: string]: unknown; } | ArrayLike<unknown>)=> {
    //   let Row = document.createElement('tr')

    //   Object.values(Data).forEach((t: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    //     let RowData = document.createElement('td');
    //     let EachText = document.createTextNode(t);
    //     RowData.appendChild(EachText);
    //     Row.appendChild(RowData);
    //   })

    //   Table.appendChild(Row);
    // })
>>>>>>> 126ed19973d920e5b06ce2ebbc032bec9e27edb2
  }

  GetData(ID : string) : void {
    console.log(ID)
  }
}
