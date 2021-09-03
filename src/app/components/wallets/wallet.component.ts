import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet, WalletsService } from '../../wallets.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  wallets: Wallet[] = [];
  title = 'mock-api'
  
  constructor(
    private walletsService: WalletsService
    ) { }

  ngOnInit(): void {
    this.getWallets();
  }
  
  getWallets(): void {
    this.walletsService.getWallets().subscribe( (res) => {
      this.wallets = res;
    });
  }

}
