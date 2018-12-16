import { Component, OnInit } from '@angular/core';
import { TradeSetup } from '../trade-setup-model';
import { TradeSetupService } from '../trade-setup.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trade-setup',
  templateUrl: './trade-setup.component.html',
  styleUrls: ['./trade-setup.component.scss']
})
export class TradeSetupComponent implements OnInit {
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
    console.log(this.TradeSetupForm.value);
    if (! this.TradeSetupForm.value['id'] ) {
      this.tradeSetupService.createTradeSetup(this.TradeSetupForm.value).subscribe((data) => {
        console.log(data.id);
        this.router.navigate(['/', data.id]);
      });
    } else {
      this.tradeSetupService.updateTradeSetup(this.TradeSetupForm.value, this.id).subscribe((data) => {
        console.log(data);
      });
    }

  }
  edit() {
    this.isEdited = true;
  }
  editCancel() {
    this.isEdited = false;
  }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      console.log(this.id);
      if ( this.id ) {
        this.tradeSetupService.getTradeSetup(this.id).subscribe( (data) => {
          this.tradeSetup = data;
        });
      } else {
       this.isEdited = true;
       this.tradeSetup = {Ticker: null, Date: Date()};
     }
    } );
  }

}
