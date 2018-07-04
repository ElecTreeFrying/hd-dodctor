import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router, NavigationStart } from '@angular/router';
import { startWith } from 'rxjs/operators';

import { SharedService } from '../../../core/service/shared.service';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  dialogRef: MatDialogRef<LoginDialogComponent>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      startWith(this.router.url)
    ).subscribe((route: NavigationStart | string) => {
      route === '/' ? setTimeout(() => { this.openDialog() }) : 0;
      if (route instanceof NavigationStart) {
        const _route = route.url.split('/');
        _route[1] === ''
          ? this.openDialog()
          : this.dialog.closeAll();
      }
    });
  }

  openDialog() {
    this.dialog.closeAll();
    this.dialogRef = this.dialog.open(LoginDialogComponent, {
      closeOnNavigation: true,
    });

    this.dialogRef.backdropClick().subscribe(() => {
      this.openDialog();
      this.sharedService.snackbar('Invalid form.');
    });
  }

}
