import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ServersService } from './servers.service'

interface Server {
    id:number, name: string, status: string, 
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
constructor(private serversService: ServersService) {}

resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(Number(route.params.id));
}
}