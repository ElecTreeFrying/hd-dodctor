import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-time-dialog',
  templateUrl: './set-time-dialog.component.html',
  styleUrls: ['./set-time-dialog.component.scss']
})
export class SetTimeDialogComponent implements OnInit {

  form: FormGroup;
  isDisabledButton: boolean = true;
  isDisabledInterval: boolean = true;
  duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  between = [];

  constructor(@Inject(FormBuilder) public fb: FormBuilder) {
    this.form = fb.group({
      'recipient': [ 'Johanna Hawkins' ],
      'duration': [ '' ],
      'between': [ '' ],
    })
  }

  ngOnInit() {
    this.form.get('recipient').disable();
    this.form.get('between').disable();

    this.initBetween();

    this.form.valueChanges.subscribe((response) => {

      const duration = !(response.duration === undefined || response.duration === null);
      const interval = !(response.between === undefined || response.between === null || response.between === '');

      this.isDisabledInterval = duration ? false : true;
      this.isDisabledButton = duration && interval ? false : true;

    });
  }

  initBetween() {
    this.between = [
      { number: 1, numbers: [0.5] },
      { number: 2, numbers: [0.5, 1] },
      { number: 3, numbers: [0.5, 1] },
      { number: 4, numbers: [0.5, 1, 2] },
      { number: 5, numbers: [0.5, 1] },
      { number: 6, numbers: [0.5, 1, 2, 3] },
      { number: 7, numbers: [0.5, 1] },
      { number: 8, numbers: [0.5, 1, 2, 4] },
      { number: 9, numbers: [0.5, 1, 3] },
      { number: 10, numbers: [0.5, 1, 2, 5] }
    ]
  }

  onChange(value: number) {
    if (value === undefined)  {
      this.form.get('between').setValue('');
      this.form.get('between').disable()
      return;
    }

    this.form.get('between').enable();
    this.initBetween();
    const filtered = this.between.filter(el => el.number === value);
    this.between = filtered[0].numbers;
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
