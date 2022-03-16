import { Component, Input } from '@angular/core';
import { AccountsService } from '../shared/data.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus({id: this.id, newStatus: status})
    this.accountsService.statusUpdated.emit(status);
  }
}
