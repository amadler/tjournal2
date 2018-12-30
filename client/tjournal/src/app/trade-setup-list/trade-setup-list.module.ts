import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeSetupListComponent } from './trade-setup-list.component';
import { TradeSetupService } from '../trade-setup/trade-setup.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TradeSetupListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TradeSetupListComponent],
  providers: [TradeSetupService]
})
export class TradeSetupListModule { }
