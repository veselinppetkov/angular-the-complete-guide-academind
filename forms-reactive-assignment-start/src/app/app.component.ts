import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable'),
    })
  }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'usernameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1000)
    });

    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }
}
