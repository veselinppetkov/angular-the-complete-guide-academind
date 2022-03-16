import { Component } from '@angular/core';
import { AccountsService } from '../shared/data.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert(`New status is: ` + status)
    });
  }

  onCreateAccount(accountName:string, status:string) {
    this.accountsService.addAccount({name: accountName, status});

  }

}
