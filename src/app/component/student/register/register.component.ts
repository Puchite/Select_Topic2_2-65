import { Course } from '../../../models/course';
import { UserService } from 'src/app/service/user.service';
import { Register } from 'src/app/models/register';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router"
import { NgControlStatusGroup } from '@angular/forms';
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
  Datatouse:any={}
  errors:any
  Check:any|undefined;
  public Data2:any = []
  coursebyyears(element: any,index: any,array: any){
    console.log(this.Data)
    return element <=this.Data.Years
  }
   constructor(private userservice: UserService,private router:Router,) {
    this.course = this.userservice.courseValue;
    this.courseData = (JSON.parse(localStorage.getItem('course') || '{}'));
    this.Data = JSON.parse(localStorage.getItem('user') || '{}').reduce(
      (obj: any, item: { Student_ID: any; }) => Object.assign(obj, { [item.Student_ID]: item.Student_ID })
    )

    userservice.get_already_regis(this.Data.Student_ID).subscribe(
      result=>{
        this.temp_data(result)
      }
    )
    this.courseData = this.courseData.filter(
      (item:any)=> item.Years<=this.Data.Years||item.Years==0
    )
    // console.log(this.courseData[0].Semester)
    this.courseData = this.courseData.filter(
      (item:any)=> item.Semester==this.term||item.Semester==0
    )
    let temp:any = []
    let tempname:any = []
    let section:any =[]


    for(let i in this.courseData){

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
    // console.log(temp)
    // console.log(section)

    this.courseData = temp

    for(let i in this.courseData){
      this.courseData[i].Section = section[i].sec.sort()
    }
    console.log(this.courseData)
    let list = this.courseData.map((i: any) => {
      return i.Course_ID
    })
    let value=this.courseData.map((i:any)=>{return 0})
    console.log(list,value)
    this.Datatouse = Object.fromEntries(list.map((_: any, i: any) => [list[i], value[i]]))

    console.log(this.Datatouse)

  }
  temp_data(result:any){
    this.Data2=result
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
    console.log(this.Data2)
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
  selectsec(event:any,id:any){
    this.Datatouse[id]= Number(event)
    // console.log(event)
  }
  Onclick(){
    console.log(this.Data2)
    let preventdata:any = []
    this.Data2.map((d: any)=>{
      if(d.Grade==null){
        preventdata.push(d.Course_ID)
      }
    })
    console.log(preventdata)
    for(let i = 0;i<this.ID_register.length;i++){
      // console.log(this.Datatouse[this.ID_register[i]])

      if(this.Datatouse[this.ID_register[i]]==0){
        alert("????????????????????????????????????????????????????????????????????????")
        break;
      }
      else{
        let datas:any
        let error:any
        // console.log(JSON.stringify(this.date).s)
        this.userservice.checkregister(this.Data.Student_ID,this.ID_register[i]).subscribe(
          result => {
            let PrepareD:Register ={Student_ID:this.Data.Student_ID,Course_ID:this.ID_register[i],Section:this.Datatouse[this.ID_register[i]],Year:JSON.parse(JSON.stringify(this.date).split('-')[0].slice(1))+542,Semester:Number(this.term),Grade:null}
            this.userservice.register(PrepareD).subscribe(
              result => {
                if(i==this.ID_register.length-1){
                  alert("?????????????????????????????????????????????")
                }
                // console.log(result)
                this.router.navigate(['/Home'])
              },
              error => {
                alert("??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????")
              },

            )

          },
          error => {
            // this.errors= true
            alert(error.error.text);
          },

        )

        let er = false

        // console.log(this.errors)
        if(this.errors){
          console.log("test")
        }
        // if(this.userservice.checkregister(this.Data.Student_ID,this.ID_register[i]).subscribe()){
        //   console.log(this.userservice.checkregister(this.Data.Student_ID,this.ID_register[i]).subscribe().next)
        // }
        // else{
        //   console.log("test")
        // }
        // try{
        //   console.log(this.userservice.checkregister(this.Data.Student_ID,this.ID_register[i]).subscribe())
        // }
        // catch (e){
        //   console.log(e)
        // }

      }
    }
    // console.log(this.ID_register)
  }
}
