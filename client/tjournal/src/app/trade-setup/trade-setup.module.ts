import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeSetupComponent } from './trade-setup/trade-setup.component';
import { TradeSetupService } from './trade-setup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../custom-components/custom-components.module';
import { TradeSetupAddComponent } from './trade-setup-add/trade-setup-add.component';
import { RouterModule } from '@angular/router';
import { TradeSetupEditComponent } from './trade-setup-edit/trade-setup-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TradeSetupComponent,
    TradeSetupAddComponent,
    TradeSetupEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomComponentsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [TradeSetupService],
  exports: [TradeSetupComponent, TradeSetupAddComponent]
})
export class TradeSetupModule { }
