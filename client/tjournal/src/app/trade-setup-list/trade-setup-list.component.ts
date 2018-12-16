import { Component, OnInit } from '@angular/core';
import { TradeSetup } from '../trade-setup/trade-setup-model';
import { TradeSetupService } from '../trade-setup/trade-setup.service';

@Component({
  selector: 'app-trade-setup-list',
  templateUrl: './trade-setup-list.component.html',
  styleUrls: ['./trade-setup-list.component.scss']
})
export class TradeSetupListComponent implements OnInit {

  tradeSetupList: TradeSetup[];
  constructor(
    private tradeSetupService: TradeSetupService
  ){
    this.tradeSetupService.getTradeSetupList().subscribe((data) => {
      this.tradeSetupList = data;
    })
  }
  ngOnInit(){}

}
