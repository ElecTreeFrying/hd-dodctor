import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/service/auth.service';
import { FirestoreService } from '../../../core/service/firestore.service';
import { DatabaseService } from '../../../core/service/database.service';
import { SharedService } from '../../../core/service/shared.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  form: FormGroup;
  isProgressing: boolean = false;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private databaseService: DatabaseService,
    private sharedService: SharedService
  ) {
    this.form = fb.group({
      'email': [ 'd@a.com "password is 123123"' ],
      'password': [ '' ]
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.isProgressing = this.form.valid;
    });
  }

  onSubmit() {

    const form = this.form.value;

    this.sharedService.snackbar('Processing... Please wait.', 100000000);

    this.isProgressing = false;

    this.authService.signIn(form.email, form.password)
      .then(() => {
        this.isProgressing = true;
        this.sharedService.signInSuccess();
        this.firestoreService.enableNetwork();
        this.databaseService.goOnline();
        this.router.navigate(['/', 'u']);
      }).catch((state) => {
        this.isProgressing = true;
        this.sharedService.signInError(state);
      });

  }

}
