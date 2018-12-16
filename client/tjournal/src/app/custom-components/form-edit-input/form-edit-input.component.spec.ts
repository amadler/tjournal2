import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditInputComponent } from './form-edit-input.component';

describe('FormEditInputComponent', () => {
  let component: FormEditInputComponent;
  let fixture: ComponentFixture<FormEditInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
