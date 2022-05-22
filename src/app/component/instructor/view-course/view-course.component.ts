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

  constructor(private userservice:UserService) {
    this.instructorData = JSON.parse(localStorage.getItem('user') || '{}')[0];
    this.userservice.getInstructorCourse(this.instructorData.Instructor_ID, this.instructorData.Password);
  }

  ngOnInit(): void {
    this.courseData = JSON.parse(localStorage.getItem('instructorCourse') || '{}');
    console.log(localStorage);
    console.log(this.courseData);

  }

}
