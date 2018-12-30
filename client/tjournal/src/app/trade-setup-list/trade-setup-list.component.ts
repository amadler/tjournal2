import { Component, OnInit, OnDestroy } from '@angular/core';
import { TradeSetup } from '../trade-setup/trade-setup-model';
import { TradeSetupService } from '../trade-setup/trade-setup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trade-setup-list',
  templateUrl: './trade-setup-list.component.html'
})
export class TradeSetupListComponent implements OnInit, OnDestroy {

  tradeSetupList: TradeSetup[];
  sub1: Subscription;
  constructor(
    private tradeSetupService: TradeSetupService
  ){
    this.sub1 = this.tradeSetupService.getTradeSetupList().subscribe((data) => {
      this.tradeSetupList = data;
    })
  }
  ngOnInit(){}
  ngOnDestroy(){
    this.sub1.unsubscribe();
  }
}
