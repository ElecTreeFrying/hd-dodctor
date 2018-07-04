import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule
} from '@angular/material';

import { StartupComponent } from './common/shared/component/startup/startup.component';

import { SharedService } from './common/core/service/shared.service';
import { EntryGuard, ExitGuard } from './common/core/service/route-guards';

import { environment } from "../environments/environment";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule
  ],
  declarations: [
    StartupComponent,
  ],
  providers: [
    SharedService,
    EntryGuard,
    ExitGuard
  ]
})
export class AppProviderModule { }
