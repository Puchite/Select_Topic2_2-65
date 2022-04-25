import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date!:Date;
  dateTH!:string;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date()
    this.dateTH = this.date.toLocaleDateString('th-TH',{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

}
