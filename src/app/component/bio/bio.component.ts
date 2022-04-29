import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  user!:any;
  Data:any;

  constructor(private userservice: UserService) {
    this.user = this.userservice.userValue;
    this.Data = JSON.parse(localStorage.getItem('user') || '{}').reduce(
      (obj: any, item: { Student_ID: any; }) => Object.assign(obj, { [item.Student_ID]: item.Student_ID })
    )
  }

  ngOnInit(): void {

  }

}
