import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }
}

export enum TransactionTypes {
  Expense = 'expense',
  Income = 'income'
}

export enum CurrencyTypes {
  EUR = 'EUR',
  RON = 'RON'
}

export interface Transaction {
  id: number;
  type: TransactionTypes;
  walletId: number;
  date: Date;
  description: string;
  amount: number;
  currency: CurrencyTypes
}