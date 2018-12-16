import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradeSetupModule } from './trade-setup/trade-setup.module';
import { HttpClientModule } from '@angular/common/http';
import { TradeSetupListModule } from './trade-setup-list/trade-setup-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TradeSetupModule,
    HttpClientModule,
    TradeSetupListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
