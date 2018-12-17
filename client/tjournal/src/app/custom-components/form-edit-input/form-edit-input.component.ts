import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-edit-input',
  templateUrl: './form-edit-input.component.html',
  styleUrls: ['./form-edit-input.component.scss']
})
export class FormEditInputComponent implements OnInit {
  @Input() controlName;
  @Input() group;
  @Output() saved$: EventEmitter<boolean> = new EventEmitter();
  @Output() canceled$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  editCancel() {
    this.canceled$.next(true);
  }
  save() {
    this.saved$.next(true);
  }
  ngOnInit() {
  }

}
