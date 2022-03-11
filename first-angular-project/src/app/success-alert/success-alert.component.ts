import { Component } from '@angular/core';

@Component({
    selector: `app-success-alert`,
    templateUrl: `./success-alert.component.html`,
    styles: [`
    .top_p {
    background-color: antiquewhite;
    border: 1px solid aquamarine;
    padding: 1rem;
    }
    `]
    // styleUrls: [`./success-alert.component.css`],
})

export class SuccessAlertComponent {
    allowNewServer: boolean = false;
    isCreated: boolean = false;
    
    hostName: string = "";

    constructor() {
        setTimeout(() => {
        this.allowNewServer = true;
        }, 3000);
    }

    onCreateServer() {
        if (this.hostName != "") {
            this.isCreated = true;
        }
    }

    getColor() {
        return Math.random() > 0.5 ? "darkgreen" : "lightgreen"
    }

}