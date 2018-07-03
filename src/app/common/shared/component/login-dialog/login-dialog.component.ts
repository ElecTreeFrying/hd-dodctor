import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  pageform: FormGroup;

  constructor(@Inject(FormBuilder) public fb: FormBuilder) {
    this.pageform = fb.group({
      'email': [ '' ],
      'password': [ '' ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.pageform.value);
  }

}
