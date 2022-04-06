import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMsg: string = null;

  constructor(private authService: AuthService) { };

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      console.log(`TBA`);
    } else {
      this.authService.signUp(email, password).subscribe(responseData => { console.log(responseData); this.isLoading = false; }, errorMessage => {
        this.errorMsg = errorMessage;
        this.isLoading = false;
      });
    }

    form.reset();
  }
}
