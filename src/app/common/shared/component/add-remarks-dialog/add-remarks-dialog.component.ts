import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-remarks-dialog',
  templateUrl: './add-remarks-dialog.component.html',
  styleUrls: ['./add-remarks-dialog.component.scss']
})
export class AddRemarksDialogComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(FormBuilder) public fb: FormBuilder) {
    this.form = fb.group({
      'recipient': [ 'Johanna Hawkins' ],
      'message': [ '' ]
    })
  }

  ngOnInit() {
    this.form.get('recipient').disable();
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
