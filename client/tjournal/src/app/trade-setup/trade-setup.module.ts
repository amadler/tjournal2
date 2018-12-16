import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeSetupComponent } from './trade-setup/trade-setup.component';
import { TradeSetupService } from './trade-setup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../custom-components/custom-components.module';

@NgModule({
  declarations: [TradeSetupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomComponentsModule
  ],
  providers: [TradeSetupService],
  exports: [TradeSetupComponent]
})
export class TradeSetupModule { }
