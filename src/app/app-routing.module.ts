import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartupComponent } from './common/shared/component/startup/startup.component';

import { EntryGuard, ExitGuard } from './common/core/service/route-guards';

const routes: Routes = [
  { path: '', component: StartupComponent, canActivate: [ ExitGuard ] },
  { path: 'u', loadChildren: './entry/entry.module#EntryModule', canActivate: [ EntryGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
