import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators'

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
        if(count == 20) {
          observer.complete()
        }
        if (count == 30) {
          observer.error(new Error(`It's enough!`))
        }
        observer.next(count);
        count++;
      }, 1000)
    })

    this.ObsSubscrition = customIntervalObs.pipe(filter ((num:number) => {
      if (num > 0) {
        return num % 2 == 0;
      }
    }), map(el => {
      return `Round: ${el}`
    })).subscribe((counter) => {
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
