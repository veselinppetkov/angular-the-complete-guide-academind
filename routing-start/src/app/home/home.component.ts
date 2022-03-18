import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  onLogin() {
    this.authService.login()
  }

  onLogout() {
    this.authService.logout();
  }
  
  ngOnInit() {
  }

  onLoadServer(id: number) {
  this.router.navigate(['../servers', id, 'edit'], {queryParams: {queryTest: true}, fragment: 'loding'})
}

}
