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

     addAccount(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
      }

     updateAccount(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
      }
}