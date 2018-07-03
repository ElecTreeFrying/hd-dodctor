import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppProviderModule } from "./app-provider.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppProviderModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
