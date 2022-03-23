import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private ObsSubscrition: Subscription;
  
  constructor() {}

  ngOnInit() {
    const customIntervalObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        if(count == 2) {
          observer.complete()
        }
        if (count == 3) {
          observer.error(new Error(`It's enough!`))
        }
        observer.next(count);
        count++;
      }, 1000)
    })

    this.ObsSubscrition = customIntervalObs.subscribe((counter) => {
      console.log(counter);
    }, (error) => {
      alert(error.message)
    }, () => {
      alert(`Function has been run successfuly!`)
    })
  }

  ngOnDestroy() {
  this.ObsSubscrition.unsubscribe();
  }

}
