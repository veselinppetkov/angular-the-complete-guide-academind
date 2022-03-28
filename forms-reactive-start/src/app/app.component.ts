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
  forbiddenUsernames: string[] = ['Vettel', 'Hamilton'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const newControl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(newControl);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
}
