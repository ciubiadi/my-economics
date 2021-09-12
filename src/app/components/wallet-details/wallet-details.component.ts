import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/shared/api.service';
import { WalletsService } from 'src/app/services/wallets.service';
import { WalletModel } from 'src/app/models/wallet.model';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss']
})
export class WalletDetailsComponent implements OnInit {
  wallet: WalletModel | undefined;

  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  constructor(
    private http: HttpClient,
    private walletsService: WalletsService,
    private api : ApiService,
    private route: ActivatedRoute,
    private location: Location
    ) { 
    }

  ngOnInit(): void {
    // this.getWallet();
  }

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  // getWallet(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
  //   this.walletsService.getWallet(id)
  //     .subscribe(wallet => this.wallet = wallet);
  // }

  // getWallet(): void {

  // }

  goBack(): void {
    this.location.back();
  }
}
