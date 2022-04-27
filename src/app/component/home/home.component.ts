import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date!:Date;
  dateTH!:string;
  user: User;

  constructor(private userservice: UserService) {
    this.user = this.userservice.userValue;
  }

  ngOnInit(): void {
    console.log(this.user)
    this.date = new Date()
    this.dateTH = this.date.toLocaleDateString('th-TH',{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

}
