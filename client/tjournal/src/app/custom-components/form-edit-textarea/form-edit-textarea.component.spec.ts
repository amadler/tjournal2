import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTextareaComponent } from './form-edit-textarea.component';

describe('FormEditTextareaComponent', () => {
  let component: FormEditTextareaComponent;
  let fixture: ComponentFixture<FormEditTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
