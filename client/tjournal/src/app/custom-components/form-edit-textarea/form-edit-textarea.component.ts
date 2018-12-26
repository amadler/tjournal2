import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-form-edit-textarea',
  templateUrl: './form-edit-textarea.component.html',
  styleUrls: ['./form-edit-textarea.component.scss']
})
export class FormEditTextareaComponent implements OnInit {

  @Input() controlName;
  @Input() group;
  @Input() initialValue: string;
  constructor() { }

  ngOnInit() {
  }

}
