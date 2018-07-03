import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesMaterialModule } from '../../../common/core/module/material/messages-material.module';

import { MessagesComponent } from './messages.component';
import { ExpandMessagesDialogComponent } from '../../../common/shared/component/expand-messages-dialog/expand-messages-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MessagesMaterialModule
  ],
  declarations: [
    MessagesComponent,
    ExpandMessagesDialogComponent
  ],
  entryComponents: [
    ExpandMessagesDialogComponent
  ]
})
export class MessagesModule { }
