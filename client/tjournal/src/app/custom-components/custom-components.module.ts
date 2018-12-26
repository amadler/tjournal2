import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditTextareaComponent } from './form-edit-textarea/form-edit-textarea.component';
import { FormEditInputComponent } from './form-edit-input/form-edit-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [FormEditTextareaComponent, FormEditInputComponent,  DescriptionComponent, ChartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormEditTextareaComponent, FormEditInputComponent, DescriptionComponent, ChartComponent],
})
export class CustomComponentsModule { }
