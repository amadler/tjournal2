import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-edit-textarea',
  templateUrl: './form-edit-textarea.component.html',
  styleUrls: ['./form-edit-textarea.component.scss']
})
export class FormEditTextareaComponent implements OnInit {

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
