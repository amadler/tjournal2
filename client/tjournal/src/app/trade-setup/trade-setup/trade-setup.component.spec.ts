import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSetupComponent } from './trade-setup.component';

describe('TradeSetupComponent', () => {
  let component: TradeSetupComponent;
  let fixture: ComponentFixture<TradeSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
