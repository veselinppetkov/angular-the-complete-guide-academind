import { Component,EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<number>()
  interval;
  lastInterval = 0;

  constructor() { }

  ngOnInit(): void {
  }

   onStartGame() {
     this.interval = setInterval(() => {
      this.intervalStarted.emit(this.lastInterval + 1);
      this.lastInterval++;
      }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval)
  }


}
