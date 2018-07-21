import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppProviderModule } from "./app-provider.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './common/shared/component/login-dialog/login-dialog.component';

import { AuthService } from './common/core/service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppProviderModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthService
  ]
})
export class AppModule { }
