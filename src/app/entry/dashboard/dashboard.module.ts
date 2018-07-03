import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMaterialModule } from '../../common/core/module/material/dashboard-material.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
