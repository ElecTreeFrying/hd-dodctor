import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppProviderModule } from "./app-provider.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './common/shared/component/login-dialog/login-dialog.component';

import { AuthService } from './common/core/service/auth.service';



import { Router, NavigationStart } from '@angular/router';
import { map } from 'rxjs/operators'



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
export class AppModule {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.state.pipe(
      map((user: any) => user !== null)
    ).subscribe((state) => {
      state ? this.router.navigate(['/', 'u']) : this.router.navigate(['/']);
    });
  }

}
