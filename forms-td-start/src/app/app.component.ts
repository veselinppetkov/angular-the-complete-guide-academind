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

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(data: NgForm) {
  //   console.log(data);
  // }

  onSubmit() {
    console.log(this.formData);
  }

}
