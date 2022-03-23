import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private ObsSubscrition: Subscription;
  
  constructor() {}

  ngOnInit() {
  //  this.ObsSubscrition = interval(1000).subscribe((counter) => {
  //     console.log(counter);
  //   })

    const customIntervalObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    })

    this.ObsSubscrition = customIntervalObs.subscribe((counter) => {
      console.log(counter);
    })
  }

  ngOnDestroy() {
  this.ObsSubscrition.unsubscribe();
  }

}
