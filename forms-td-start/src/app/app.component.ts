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
  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formData.form.patchValue({
      userData: {
        username: suggestedName,
        email: suggestedName + '@abv.bg'
      }
    })
  }

  // onSubmit(data: NgForm) {
  //   console.log(data);
  // }

  onSubmit() {
    console.log(this.formData);
  }

}
