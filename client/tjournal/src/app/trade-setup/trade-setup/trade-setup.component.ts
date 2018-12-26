import { Component, OnInit } from '@angular/core';
import { TradeSetup } from '../trade-setup-model';
import { TradeSetupService } from '../trade-setup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trade-setup',
  templateUrl: './trade-setup.component.html'
})
export class TradeSetupComponent implements OnInit {
  tradeSetup: TradeSetup;
  id: string;
  constructor(
    private tradeSetupService: TradeSetupService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
        this.tradeSetupService.getTradeSetup(this.id).subscribe( (data) => {
          this.tradeSetup = data;
        });
    } );
  }
}
