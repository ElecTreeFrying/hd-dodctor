import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';

import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private vertical: MatSnackBarVerticalPosition = 'bottom';
  private horizontal: MatSnackBarHorizontalPosition = 'center';
  private snackbarRef: MatSnackBarRef<any>;

  constructor(
    private snack: MatSnackBar,
    private firestoreService: FirestoreService
  ) { }

  snackbar(message: string, duration: number = 3500): MatSnackBarRef<SimpleSnackBar> {
    const config = new MatSnackBarConfig;
    config.duration = duration;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;

    return this.snack.open(message, '', config);
  }

  formError() {
    let config = new MatSnackBarConfig();
    config.duration = 2500;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open('Form error. Please try again.', '', config);
  }

  signInSuccess() {
    const message = 'Successfully signed in';
    let config = new MatSnackBarConfig();
    config.duration = 3500;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(message, '', config)
      .afterDismissed().subscribe(() => {
        const message = 'Welcome to Hyperdetect Patient';
        this.snack.open(message, '', config);
      });
  }

  signOutSuccess() {
    const message = 'Successfully signed out';
    let config = new MatSnackBarConfig();
    config.duration = 3500;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(message, '', config);
  }

  signInError(error: any) {
    let config = new MatSnackBarConfig();
    config.duration = 7000;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(error.message, '', config);
  }

  signUpError(error: any) {
    let config = new MatSnackBarConfig();
    config.duration = 7000;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(error.message, '', config);
  }

}
