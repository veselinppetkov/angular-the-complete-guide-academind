import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactiveGuard } from './services/can-deactivate-guard.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children:[  
      {path: ':id/:name', component: UserComponent},
  ]},
    {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactiveGuard]}
  ]},
    {path: 'not-found', component: ErrorPageComponent, data: {msg: 'Opps..something went wrong'}},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  ]

@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};