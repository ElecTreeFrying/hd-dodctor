import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryComponent } from "./entry.component";

const routes: Routes = [
  { path: '', component: EntryComponent, children: [
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
