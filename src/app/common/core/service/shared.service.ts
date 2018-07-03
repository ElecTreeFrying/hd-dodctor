import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private vertical: MatSnackBarVerticalPosition = 'bottom';
  private horizontal: MatSnackBarHorizontalPosition = 'center';
  private snackbarRef: MatSnackBarRef<any>;

  constructor(private snack: MatSnackBar) { }

  snackbar(message: string, duration: number = 3500): MatSnackBarRef<SimpleSnackBar> {
    const config = new MatSnackBarConfig;
    config.duration = duration;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;

    return this.snack.open(message, '', config);
  }

}
