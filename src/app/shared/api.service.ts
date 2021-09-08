import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  private emitChangeSource = new Subject<any>();
  editWallet$ = this.emitChangeSource.asObservable();
  
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }

  /* WALLETS */
  postWallet(data : any) {
    return this.http.post<any>("http://localhost:3000/wallets", data)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  getWallets() {
    return this.http.get<any>("http://localhost:3000/wallets")
    .pipe(map((res : any) => {
      return res;
    }))
  }

  updateWallet(data :any, id: number) {
    return this.http.put<any>("http://localhost:3000/wallets/" + id, data)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  deleteWallet(id: number) {
    return this.http.delete<any>("http://localhost:3000/wallets/" + id)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  /* TRANSACTIONS */
  postTransaction(data : any) {
    return this.http.post<any>("http://localhost:3000/transactions", data)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  getTransactions() {
    return this.http.get<any>("http://localhost:3000/transactions")
    .pipe(map((res : any) => {
      return res;
    }))
  }

  updateTransaction(data :any, id: number) {
    return this.http.put<any>("http://localhost:3000/transactions" + id, data)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  deleteTransaction(id: number) {
    return this.http.delete<any>("http://localhost:3000/transactions/" + id)
    .pipe(map((res : any) => {
      return res;
    }))
  }

}
