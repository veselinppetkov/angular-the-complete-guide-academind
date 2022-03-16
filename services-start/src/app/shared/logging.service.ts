export class LoggingService {
    logginServiceChange(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }
}