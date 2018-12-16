import { Component } from '@angular/core';
import { TradeSetupService } from './trade-setup/trade-setup.service';
import { TradeSetup } from './trade-setup/trade-setup-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tradeSetupList: TradeSetup[];
  constructor(
    private tradeSetupService: TradeSetupService
  ){
    this.tradeSetupService.getTradeSetupList().subscribe((data) => {
      this.tradeSetupList = data;
    })
  }
  title = 'tjournal';
}
