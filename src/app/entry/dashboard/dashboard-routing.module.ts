import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', loadChildren: './readings/readings.module#ReadingsModule' },
    { path: 'readings', loadChildren: './readings/readings.module#ReadingsModule' },
    { path: 'message', loadChildren: './messages/messages.module#MessagesModule' },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
