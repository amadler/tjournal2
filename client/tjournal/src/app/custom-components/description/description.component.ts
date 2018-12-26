import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() input;
  @Input() controlName;
  @Input() group;
  @Output() saved$: EventEmitter<boolean> = new EventEmitter();
  @Output() canceled$: EventEmitter<boolean> = new EventEmitter();

  isEdited = false;
  constructor() { }

  ngOnInit() {
  }
  edit() {
    this.isEdited = true;
  }

  editCancel() {
    this.isEdited = false;
    this.canceled$.next(true);
  }

  save() {
    this.saved$.next(true);
    this.isEdited = false;
  }
}
