import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  onAddHobby() {
    const newControl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(newControl);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
}