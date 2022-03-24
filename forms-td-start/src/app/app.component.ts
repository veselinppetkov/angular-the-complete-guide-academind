import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(`formData`) formData: NgForm;
  freeText: string = "";

  isSubmitted: boolean = false;
  genders: string[] = ['male', 'female'];

  user = {
    username: "",
    email: "",
    secretQuestion: "",
    secretAnswer: "",
    gender: "",
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formData.form.patchValue({
      userData: {
        username: suggestedName,
        email: suggestedName + '@abv.bg'
      }
    })
  }

  onSubmit() {
    this.isSubmitted = true;

    console.log(this.formData.value.userData.username)

    this.user.username = this.formData.value.userData.username;
    this.user.email = this.formData.value.userData.email;
    this.user.secretQuestion = this.formData.value.secret;
    this.user.secretAnswer = this.formData.value.textarea;
    this.user.gender = this.formData.value.gender;

    this.formData.reset()
  }

}
