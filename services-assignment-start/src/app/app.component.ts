import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private usersService: UsersService){}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id)
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id)
  }
}
