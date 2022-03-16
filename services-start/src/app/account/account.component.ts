import { Component, Input } from '@angular/core';
import { AccountsService } from '../shared/data.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}


  onSetTo(status: string) {
    this.accountsService.updateAccount({id: this.id, newStatus: status})
    this.loggingService.logStatusChange(status);
  }
}
