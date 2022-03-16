import { Component } from '@angular/core';
import { AccountsService } from '../shared/data.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onCreateAccount(newAccount: {name: string, status: string}) {
    this.accountsService.addAccount(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

}
