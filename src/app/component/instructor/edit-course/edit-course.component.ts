import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  corseData: any;
  submitform: any;

  constructor(
    private userservice:UserService,
    private fb:FormBuilder
  ) {
    this.submitform = this.fb.group({
      course_id: ['040613102'],
      course_name: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(f:FormGroup)
  {
    let course_id = f.get('course_id')?.value;
    let new_course_name = f.get('course_name')?.value;

    this.userservice.loadSingleCourse(course_id).subscribe(data => {
      this.corseData = data;
      if(confirm('รายวิชาที่ต้องการแก้ไขคือ '+data[0].Course_Name+' แก้ไขเป็น '+new_course_name))
      {
        this.userservice.changeCourse(course_id, new_course_name).subscribe(
        { next: () => {
          alert("แก้ไขรายวิชาเสร็จสิ้น");
        },
          error: () => {
            alert("มีบางอย่างผิดพลาดลองใหม่อีกครั้ง")
          }

        });
      }
    })

    console.log(this.corseData);


  }
}
