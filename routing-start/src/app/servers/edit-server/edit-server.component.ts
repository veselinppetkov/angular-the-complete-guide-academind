import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate} from '../../services/can-deactivate-guard.service';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.queryParams.subscribe((params: Params) => {
    console.log(params);
    this.allowEdit = params.allowEdit === 'true' ? true : false;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate([`../`], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  if (!this.allowEdit) {
    return true;
  }
  if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
    return confirm(`Do you want to discard the changes?`)
  } else {
    return true;
    }
  }
}
