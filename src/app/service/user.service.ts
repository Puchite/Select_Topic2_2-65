import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private router:Router, private http: HttpClient) {

  }

  login(username: string, password: string)
  {
    console.log(`${environment.apiUrl}/userdata/`)
    return this.http.get(`${environment.apiUrl}/userdata/`)


  }
}
