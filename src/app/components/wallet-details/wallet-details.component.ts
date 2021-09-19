import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/shared/api.service';
import { WalletsService } from 'src/app/services/wallets.service';
import { WalletModel } from 'src/app/models/wallet.model';
import { TransactionModel } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  walletData !: any;
  walletModelObj : WalletModel = new WalletModel();
  transactionsData !: any;
  transactionModelObj : TransactionModel = new TransactionModel();
  // transactionModelObj : TransactionModel | undefined;

  formTransaction !: FormGroup;
  options!: FormGroup;
  colorControl = new FormControl('primary');


  expenses : any;
  incomes : any;

  constructor(
    private http: HttpClient,
    private walletsService: WalletsService,
    private transactionsService: TransactionService,
    private api : ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
    ) {
      this.options = formBuilder.group({
        color: this.colorControl
      });
    }
    
    ngOnInit(): void {
    this.getWallet();
    this.getWalletTransactions();
    this.getWalletExpenses();
    this.getWalletIncomes();
    this.formTransaction =  this.formBuilder.group({
      transactionTitle : [''],
      transactionDescription : [''],
      transactionAmount : [''],
      transactionType : ['']
    })
  }

  getWallet(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
    this.walletsService.getWallet(id)
      .subscribe(res => this.walletData = res);
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

  postTransaction() {
    const id = parseInt(this.route.snapshot.paramMap.get('walletId')!, 10);
    let date = new Date('dd/mm/yyyy');
    let finalDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear(); 
    console.log(finalDate);
    this.transactionModelObj.title = this.formTransaction.value.transactionTitle;
    // this.walletsData[0].name = this.formValue.value.walletName;
    this.transactionModelObj.description = this.formTransaction.value.transactionDescription;
    // this.walletsData[0].owner = this.formValue.value.ownerName;
    this.transactionModelObj.amount = this.formTransaction.value.transactionAmount;
    this.transactionModelObj.type = this.formTransaction.value.transactionType;
    this.transactionModelObj.walletId = id;
    this.transactionModelObj.date = new Date();
    this.transactionModelObj.currency = this.formTransaction.value.transactionCurrency;


    this.transactionsService.postTransaction(this.transactionModelObj)
    .subscribe(res => {
      console.log(this.transactionModelObj);
      alert("Transaction Added Succesfully");
      this.formTransaction.reset();
      this.transactionsData.push(res);
      this.getWalletTransactions();
    },
    err => {
      alert("Something went wrong");
    })
  }
  
  goBack(): void {
    this.location.back();
  }
}
