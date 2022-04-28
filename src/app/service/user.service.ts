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

  private courseSubject!: BehaviorSubject<Course>;
  public course: Observable<Course>;

  constructor(private router:Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();

    this.courseSubject = new BehaviorSubject<Course>(JSON.parse(localStorage.getItem('course') || '{}'));
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
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
    }))
  }

  getCourse()
  {
    return this.http.get<Course>(`${environment.apiUrl}/course`)
    .pipe(
      map(course => {
      localStorage.setItem('course', JSON.stringify(course))
      this.courseSubject.next(course);
    }))

  }
}
