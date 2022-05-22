import { InstructorCourse } from './../models/instructorCourse';
import { RegisterResult } from './../models/registerResult';
import { User } from './../models/user';
import { Register } from '../models/register';
import { Course } from '../models/course';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Injectable, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { AuthInterceptor } from '../interceptor/auth.interceptor';

>>>>>>> b16df99f164a88721e42ad1dde4d7eab2fef2161
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
<<<<<<< HEAD
  public regis!: Observable<Register>;
=======

>>>>>>> b16df99f164a88721e42ad1dde4d7eab2fef2161
  public state:Boolean=false;

  private courseSubject!: BehaviorSubject<Course>;
  public course: Observable<Course>;

  private registerResultSubject: BehaviorSubject<RegisterResult>;
  public registerResult!: Observable<RegisterResult>;

  private instructorCourseSubject: BehaviorSubject<InstructorCourse>;
  public instructorCourse: Observable<InstructorCourse>;

  //Role Student or Instuctor
  public role!: string;
  constructor(private router:Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(JSON.stringify(localStorage.getItem('user') || '{}')));
    this.user = this.userSubject.asObservable();

    this.courseSubject = new BehaviorSubject<Course>(JSON.parse(JSON.stringify(localStorage.getItem('course') || '{}')));
    this.course = this.courseSubject.asObservable();

    this.registerResultSubject = new BehaviorSubject<RegisterResult>(JSON.parse(JSON.stringify(localStorage.getItem('registerResult') || '{}')));
    this.registerResult = this.registerResultSubject.asObservable();

    this.instructorCourseSubject = new BehaviorSubject<InstructorCourse>(JSON.parse(JSON.stringify(localStorage.getItem('instructorCourse') || '{}')));
    this.instructorCourse = this.instructorCourseSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.getValue();
  }

  public get courseValue(): Course{
    return this.courseSubject.value;
  }
  register(Data:Register){
    console.log(Data)
    return this.http.post(`${environment.apiUrl}/register`,Data)
  }
  checkregister(student_ID:string,Course_ID:string){
    return this.http.get(`${environment.apiUrl}/register/${student_ID}/${Course_ID}`)
  }

  login_as_student(username:string, password:string)
  {
    return this.http.get<User>(`${environment.apiUrl}/userdata/login/${username}/${password}`)
    .pipe(
      map(user => {
      if(typeof(user)==="object"){

        this.state=true;
        this.role='นักศึกษา';
        localStorage.setItem('user', JSON.stringify(user));
        // console.log(localStorage.getItem('user'))
        this.userSubject.next(user);
      }
      else{
        console.log("false")
        this.state=false
      }
    }))

  }

  login_as_teacher(username:string, password:string)
  {
    return this.http.get<User>(`${environment.apiUrl}/instructor/${username}/${password}`)
    .pipe(
      map(user => {
      if(typeof(user)==="object"){
        this.state=true;
        this.role='อาจารย์';
        localStorage.setItem('user', JSON.stringify(user));
        // console.log(localStorage.getItem('user'))
        this.userSubject.next(user);
      }
      else{
        console.log("false")
        this.state=false
      }
    }))
  }

  logout()
  {
    localStorage.removeItem('user');
    localStorage.removeItem('course');
    localStorage.removeItem('registerResult');
    localStorage.removeItem('instructorCourse');

    this.userSubject.next(null!);
    this.courseSubject.next(null!);
    this.registerResultSubject.next(null!);
    this.instructorCourseSubject.next(null!);

    this.router.navigate(['']);
  }

  getCourse()
  {
    console.log(`${environment.apiUrl}/course`);
    return this.http.get<Course>(`${environment.apiUrl}/course`)
    .pipe(map
      (course =>
        {
          localStorage.setItem('course', JSON.stringify(course));
          this.courseSubject.next(course);
        }
      )
    )
  }

  getRegisterResult(student_id:string, year: string, semester: string)
  {
    console.log(`${environment.apiUrl}/register/RegisterResult/${student_id}/${year}/${semester}`)
    return this.http.get<RegisterResult>(`${environment.apiUrl}/register/RegisterResult/${student_id}/${year}/${semester}`)

    //   .pipe(map
    //     (registerResult => {
    //       localStorage.setItem('registerResult', JSON.stringify(registerResult));
    //       this.registerResultSubject.next(registerResult);
    //     }
    //   )
    // )
  }

  getInstructorCourse(instructor_id:string, password:string)
  {
    console.log(`${environment.apiUrl}/instructor/AllSubject/${instructor_id}/${password}`)
    return this.http.get<InstructorCourse>(`${environment.apiUrl}/instructor/AllSubject/${instructor_id}/${password}`)
      .pipe(map
          (courseData => {
            localStorage.setItem('instructorCourse', JSON.stringify(courseData));
            this.instructorCourseSubject.next(courseData);
          })
        )

  }
}
