import { User } from './../models/user';
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

  constructor(private router:Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.value;
  }

  login(username:string, password:string)
  {
    // console.log(`${environment.apiUrl}/userdata/${username}/${password}`)
    // this.http.get<User>(`${environment.apiUrl}/userdata/${username}/${password}`).subscribe(data => {
    //   if (data)
    //   {
    //     console.log('Login!');
    //     return true;
    //   }

    //   console.log('Login Failed invalid username or password');
    //   return false;
    // })
    
    console.log(`${environment.apiUrl}/userdata/${username}/${password}`)
    return this.http.get<User>(`${environment.apiUrl}/userdata/${username}/${password}`)
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
    }))

  }
}
