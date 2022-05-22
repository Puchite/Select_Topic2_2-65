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
  Datatouse:any=[]

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
    let temp:any = []
    let tempname:any = []
    let section:any =[]
    // console.log(this.courseData)
    // console.log(this.courseData[0])
    for(let i in this.courseData){
      // console.log(this.courseData[i])
      // console.log(this.courseData[i].Course_ID)
      // console.log(tempname.indexOf(this.courseData[i].Course_ID))
      if(tempname.indexOf(this.courseData[i].Course_ID)==-1){
        // console.log(this.courseData[i])
        temp.push(this.courseData[i])
        tempname.push(this.courseData[i].Course_ID)
        section.push({sec:[this.courseData[i].Section]})
      }
      else{

        section[tempname.indexOf(this.courseData[i].Course_ID)].sec.push(this.courseData[i].Section)
      }

    }
    console.log(temp)
    console.log(section)

    this.courseData = temp

    for(let i in this.courseData){
      this.courseData[i].Section = section[i].sec.sort()
    }
    console.log(this.courseData)
    this.Datatouse= this.courseData.map((i: any)=>{
      return {Course_ID:i.Course_ID,Section:1}
    })
    console.log(this.Datatouse)
    // console.log(this.courseData[0].Section)
     //MockData for testing
    // this.term="2"
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
    console.log(event.target.checked)
    if(event.target.checked&&!this.ID_register.includes(ID)){
      // console.log(this.ID_register.indexOf(ID))
      this.ID_register.push(ID)
    }
    else{
      this.ID_register.splice(this.ID_register.indexOf(ID))
    }
  }
  selectsec(event:any){
    console.log(event)
  }
  Onclick(){
    for(let i = 0;i<this.ID_register.length;i++){
      // console.log(this.Data)
      console.log(this.userservice.checkregister(this.Data.Student_ID,this.ID_register[i]).subscribe())
    }
    // console.log(this.ID_register)
  }
}
