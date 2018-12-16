import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeSetupComponent } from './trade-setup/trade-setup/trade-setup.component';
import { TradeSetupListComponent } from './trade-setup-list/trade-setup-list.component';

const routes: Routes = [
  { path: '',  redirectTo: '/trades', pathMatch: 'full' },
  {
    path: 'trades',
    component: TradeSetupListComponent
  },
  {
    path: 'trade',
    component: TradeSetupComponent
  },
  {
    path: 'trade/:id',
    component: TradeSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
