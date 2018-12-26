import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeSetupListComponent } from './trade-setup-list/trade-setup-list.component';
import { TradeSetupAddComponent } from './trade-setup/trade-setup-add/trade-setup-add.component';
import { TradeSetupComponent } from './trade-setup/trade-setup/trade-setup.component';
import { TradeSetupEditComponent } from './trade-setup/trade-setup-edit/trade-setup-edit.component';

const routes: Routes = [
  { path: '',  redirectTo: '/trades', pathMatch: 'full' },
  {
    path: 'trades',
    component: TradeSetupListComponent
  },
  {
    path: 'trade/add',
    component: TradeSetupAddComponent
  },
   {
    path: 'trade/:id',
    component: TradeSetupComponent
  },
  {
    path: 'trade/:id/edit',
    component: TradeSetupEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
