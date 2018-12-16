import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSetupListComponent } from './trade-setup-list.component';

describe('TradeSetupListComponent', () => {
  let component: TradeSetupListComponent;
  let fixture: ComponentFixture<TradeSetupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeSetupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
