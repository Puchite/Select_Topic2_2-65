import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private router:Router, private http: HttpClient) {

  }

  login(username: string, password: string)
  {
    console.log(`${environment.apiUrl}/userdata`)
    this.http.get<HttpClient>(`${environment.apiUrl}/userdata`).subscribe(data => {
      console.log(data)
    })


  }
}
