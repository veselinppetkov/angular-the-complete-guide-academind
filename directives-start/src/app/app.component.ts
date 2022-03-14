import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  
  oddNums = this.numbers.filter(x => x % 2 != 0)
  evenNums = this.numbers.filter(x => x % 2 == 0)

  value = 5;

  onlyOdd = false;
}
