import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked: boolean = false;
  clicks: any[] = [];

  onClick() {
    this.isClicked = !this.isClicked;
    this.clicks.push(new Date().toDateString())
  }
}
