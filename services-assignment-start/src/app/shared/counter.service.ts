import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    incrementInToAct () {
        this.inactiveToActiveCounter++;
        console.log(`Status was set to active: ` + this.inactiveToActiveCounter + ` times`)
    }

    incrementActToIn () {
        this.activeToInactiveCounter++;
        console.log(`Status was set to inactive: ` + this.activeToInactiveCounter + ` times`)
    }

}