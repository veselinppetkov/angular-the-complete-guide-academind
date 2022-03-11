import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  username:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  isEmpty() {
    return this.username === "";
  }

  onClick() {
  this.username = "";
  }

}
