import { Component, OnInit } from '@angular/core';
import { TradeSetup } from '../trade-setup-model';
import { TradeSetupService } from '../trade-setup.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trade-setup-edit',
  templateUrl: './trade-setup-edit.component.html'
})
export class TradeSetupEditComponent implements OnInit {

  tradeSetup: TradeSetup;
  TradeSetupForm: FormGroup = new FormGroup({});
  isEdited = false;
  LongTrendChartFile: File = null;
  id: string;
  constructor(
    private tradeSetupService: TradeSetupService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
   }
  createForm(){
    this.TradeSetupForm = this.fb.group({
      Ticker: new FormControl(this.tradeSetup.Ticker, Validators.required),
      Date: new FormControl(this.tradeSetup.Date, Validators.required),
      LongTrend: new FormControl(this.tradeSetup.LongTrend),
      LongTrendChart: new FormControl(this.tradeSetup.LongTrendChart),
      MiddleTrend: new FormControl(this.tradeSetup.MiddleTrend),
      MiddleTrendChart: new FormControl(this.tradeSetup.MiddleTrendChart),
      ShortTrend: new FormControl(this.tradeSetup.ShortTrend),
      ShortTrendChart: new FormControl(this.tradeSetup.ShortTrendChart),
      FundamentalText: new FormControl(this.tradeSetup.FundamentalText),
      NearestFundamentalEventDate: new FormControl(this.tradeSetup.NearestFundamentalEventDate),
      NearestFundamentalEventName: new FormControl(this.tradeSetup.NearestFundamentalEventName)
    });
  }
   save() {
    const ticker = this.TradeSetupForm.get('Ticker').value;
    let fd = new FormData();
    fd.append('image',  this.LongTrendChartFile,  this.LongTrendChartFile.name);
    console.log(fd)
    this.TradeSetupForm.get('Ticker').setValue(ticker.toUpperCase());
      // this.tradeSetupService.updateTradeSetup(this.TradeSetupForm.value, this.id).subscribe((data) => {
      //   this.editCancel();
      // });
  }
  LongTrendChartChange(event){
    this.LongTrendChartFile = <File>event.target.files[0];
    console.log(this.LongTrendChartFile)
  }
  editCancel() {
    this.router.navigate(['./trade/', this.id]);
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.tradeSetupService.getTradeSetup(this.id).subscribe( (data) => {
        this.tradeSetup = data;
        this.createForm();
        });
    });
  }

}
