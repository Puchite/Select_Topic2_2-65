import { FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  instructorData: any;
  courseData: any;
  form!: FormGroup;
  submitform: any;
  studentList:any;
  check=false

  constructor(
    private userservice:UserService,
    private fb:FormBuilder) {
    this.instructorData = JSON.parse(localStorage.getItem('user') || '{}')[0];
    this.courseData = JSON.parse(localStorage.getItem('instructorCourse') || '{}');
    this.submitform = this.fb.group({
      course_id: [''],
      section: [''],
      year: [''],
    })
  }

  ngOnInit(): void {
    console.log(this.courseData);
  }


  onSubmit(f:FormGroup)
  {
    let year = f.get('year')?.value;
    let course_id = f.get('course_id')?.value;
    let section = f.get('section')?.value;
    this.check=true
    // console.log(f.get('course_id')?.value, f.get('section')?.value, f.get('year')?.value);

    console.log("year: ",year," course_id: ",course_id, "section: ",section);
    this.userservice.getStudentListFromCourse(year, course_id, section)
    .subscribe(data =>{
      this.studentList = data;
      console.log(this.studentList);
    })


  }
}
