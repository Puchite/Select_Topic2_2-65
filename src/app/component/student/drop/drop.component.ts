import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {

  submitform: any;
  studentData: any;
  year: any;

  constructor(
    private fb:FormBuilder,
    private userservice:UserService) {
    this.studentData =  JSON.parse(localStorage.getItem('user') || '{}')[0];
    this.submitform = this.fb.group({
      course_id: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(f:FormGroup)
  {
    let course_id = f.get('course_id')?.value;
    let student_id = this.studentData.Student_ID;
    let year = new Date().getFullYear()+542;

    if(confirm("ต้องการที่จะถอนวิชา "+course_id))
    {
      this.userservice.dropCourse(student_id, year, course_id)
      .subscribe({
        next: () => {
          alert("ถอนวิชาเรียนเสร็จสิ้น");
        },
        error: () => {
          alert("ไม่พบวิชาที่จะถอนหรือมีข้อผิดพลาด");
        }
      }
      );
    }
  }

}
