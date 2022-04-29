import { WeekDay } from '@angular/common';
import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date!: Date;
  dateTH!: string;
  semester: string = 'ฤดูร้อน/2564';
  user!: any;
  userData!: User;
  userlist: Array<User> = [];

  Data: any;

  constructor(private userservice: UserService) {
    this.user = this.userservice.userValue;
    this.Data = JSON.parse(localStorage.getItem('user') || '{}').reduce(
      (obj: any, item: { tags: any; }) => Object.assign(obj, { [item.tags]: item.tags })
    )
    this.userData = this.Data;
  }

  ngOnInit(): void {
    this.date = new Date();

    this.dateTH = this.date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: "long"
    })
  }

  logout()
  {
    this.userservice.logout();
  }

}
