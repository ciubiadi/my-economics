import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet, WalletsService } from '../../wallets.service';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  @Output('onEdit') editEvent = new EventEmitter<any>();

  @Input() showAdd!: boolean;
  // wallets: Wallet[] = [];

  walletsData !: any;

  constructor(
    // private walletsService: WalletsService,
    private api : ApiService
    ) { }

  ngOnInit(): void {
    this.getAllWallets();
    console.log(this.showAdd);
    // this.getWallets();
  }

  onEdit(wallet: any){
    this.api.emitChange(wallet);
  
   }

   getAllWallets() {
    this.api.getWallets().subscribe(res => {
      this.walletsData = res;
    })
  }

  deleteWallet(wallet: any) {
    this.api.deleteWallet(wallet.id).subscribe(res => {
      alert('Wallet Deleted Succesfully');
      this.getAllWallets();
    });
  }
  
  // getWallets(): void {
  //   this.walletsService.getWallets().subscribe( (res) => {
  //     this.wallets = res;
  //   });
  // }

  // editWallet(wallet: any) {
  //   console.log(wallet);
  // }

  // callOnEdit(): void {
  //   this.editEvent.next('')
  // }

}
