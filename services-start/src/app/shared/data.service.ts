import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor (private loggingService: LoggingService) {}

      statusUpdated = new EventEmitter<string>();

     addAccount(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
        this.loggingService.logStatusChange(newAccount.status);
      }

     updateStatus(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logStatusChange(updateInfo.newStatus);
      }
}