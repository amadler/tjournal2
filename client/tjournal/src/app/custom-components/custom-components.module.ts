import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditTextareaComponent } from './form-edit-textarea/form-edit-textarea.component';
import { FormEditInputComponent } from './form-edit-input/form-edit-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormEditTextareaComponent, FormEditInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormEditTextareaComponent, FormEditInputComponent],
})
export class CustomComponentsModule { }
