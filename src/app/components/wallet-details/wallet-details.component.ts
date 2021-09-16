import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/shared/api.service';
import { WalletsService } from 'src/app/services/wallets.service';
import { WalletModel } from 'src/app/models/wallet.model';
import { TransactionModel } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

// interface Transaction {
//   item: string;
//   cost: number;
// }

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss']
})
export class WalletDetailsComponent implements OnInit {
  wallet: WalletModel | undefined;

  // displayedColumns: string[] = ['item', 'cost'];
  // transactions: Transaction[] = [
  //   {item: 'Beach ball', cost: 4},
  //   {item: 'Towel', cost: 5},
  //   {item: 'Frisbee', cost: 2},
  //   {item: 'Sunscreen', cost: 4},
  //   {item: 'Cooler', cost: 25},
  //   {item: 'Swim suit', cost: 15},
  // ];
  transactionModelObj : TransactionModel | undefined;
  transactionsData !: any;

  expenses : any;
  incomes : any;

  constructor(
    private http: HttpClient,
    private walletsService: WalletsService,
    private transactionsService: TransactionService,
    private api : ApiService,
    private route: ActivatedRoute,
    private location: Location
    ) { 
    }
    
    ngOnInit(): void {
    this.getWalletTransactions();
    this.getWalletExpenses();
    this.getWalletIncomes();
  }
  // getTotalCost() {
  //   return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }

  getWallet(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
    this.walletsService.getWallet(id)
      .subscribe(wallet => this.wallet = wallet);
  }

  getWalletTransactions(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
    this.walletsService.getWalletTransactions(id)
    .subscribe(res => this.transactionsData = res);
  }

  getWalletExpenses(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
    this.walletsService.getWalletTransactionsType(id, 'expense')
    .subscribe(res => this.expenses = res);
  }

  getWalletIncomes(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
    this.walletsService.getWalletTransactionsType(id, 'income')
    .subscribe(res => this.incomes = res);
  }

  // getWallet(): void {

  // }

  goBack(): void {
    this.location.back();
  }
}
