import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  value: Date;
  phase1end:number;
  phase1start:number;

  constructor() { }

  ngOnInit() {
    this.phase1end = 21;
    this.phase1start = 5;
  }

}
