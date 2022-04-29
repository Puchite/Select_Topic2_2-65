import { User } from './../models/user';
import { Course } from '../models/course';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public state:Boolean=false;
  private courseSubject!: BehaviorSubject<Course>;
  public course: Observable<Course>;

  constructor(private router:Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(JSON.stringify(localStorage.getItem('user') || '{}')));
    this.user = this.userSubject.asObservable();

    this.courseSubject = new BehaviorSubject<Course>(JSON.parse(JSON.stringify(localStorage.getItem('course') || '{}')));
    this.course = this.courseSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.getValue();
  }

  public get courseValue(): Course{
    return this.courseSubject.value;
  }

  login(username:string, password:string)
  {

    return this.http.get<User>(`${environment.apiUrl}/userdata/${username}/${password}`)
    .pipe(
      map(user => {
      console.log(typeof(user))
      if(typeof(user)==="object"){
        this.state=true;
        console.log("true")
        localStorage.setItem('user', JSON.stringify(user));
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
    this.userSubject.next(null!);
    this.courseSubject.next(null!);
    this.router.navigate(['']);
  }

  getCourse()
  {
    console.log(`${environment.apiUrl}/course`)
    return this.http.get<Course>(`${environment.apiUrl}/course`)
    .pipe(
      map(course => {
        console.log('Get course');
        console.log(course);
        localStorage.setItem('course', JSON.stringify(course));
        this.courseSubject.next(course);
    }))

  }
}
