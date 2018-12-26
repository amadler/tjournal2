import { Component, OnInit } from '@angular/core';
import { TradeSetup } from '../trade-setup-model';
import { TradeSetupService } from '../trade-setup.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trade-setup-add',
  templateUrl: './trade-setup-add.component.html'
})
export class TradeSetupAddComponent implements OnInit {
  tradeSetup: TradeSetup;
  TradeSetupForm: FormGroup;
  isEdited = false;

  id: string;
  constructor(
    private tradeSetupService: TradeSetupService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.TradeSetupForm = this.fb.group({
      Ticker: new FormControl('', Validators.required),
      Date: new FormControl(new Date(), Validators.required),
      LongTrend: new FormControl(''),
      LongTrendChart: new FormControl(''),
      MiddleTrend: new FormControl(''),
      MiddleTrendChart: new FormControl(''),
      ShortTrend: new FormControl(''),
      ShortTrendChart: new FormControl(''),
      FundamentalText: new FormControl(''),
      NearestFundamentalEventDate: new FormControl(new Date()),
      NearestFundamentalEventName: new FormControl('')
    });
   }
  save() {
      const ticker = this.TradeSetupForm.get('Ticker').value;
      this.TradeSetupForm.get('Ticker').setValue(ticker.toUpperCase());
      this.tradeSetupService.createTradeSetup(this.TradeSetupForm.value).subscribe((data) => {
        this.router.navigate(['./trade/', data.id]);
      });
  }
  add() {
  }
  addCancel() {
    this.router.navigate(['/trades/']);
  }
  ngOnInit() {
  }

}
