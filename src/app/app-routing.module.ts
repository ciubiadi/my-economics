import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';
import { WalletsComponent } from './components/wallets/wallet.component';

const routes: Routes = [
  { path: 'wallets', component: WalletsComponent },
  { path: 'wallets/:walletId', component: WalletDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
