import { TestBed } from '@angular/core/testing';

import { TradeSetupService } from './trade-setup.service';

describe('TradeSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradeSetupService = TestBed.get(TradeSetupService);
    expect(service).toBeTruthy();
  });
});
