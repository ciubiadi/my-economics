import { Injectable } from '@angular/core';
// import { Transaction } from './transaction.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WalletModel } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  private walletsUrl = 'http://localhost:3000/wallets/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // walletsData : WalletModel[] = [];
  
  // showAdd!: boolean;

  constructor(
    private http: HttpClient
    ) { }

    // getShowAdd() {
    //   return this.showAdd;
    // }
  
    // setShowAdd(newValue: any) {
    //   this.showAdd = newValue;
    // }
  
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
    
      // public getWallets(): Observable<Wallet[]> {
  //   return this.http.get<Wallet[]>('http://localhost:3000/wallets');
  // }
  
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

  // public retrieveInitialWallets(): void {
  //   this.getWallets().subscribe( res => {
  //     this.walletsData = res;
  //   });
  // }

      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
       private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

  public getWallet(id: number): Observable<WalletModel> {
    const url = `${this.walletsUrl}/${id}`;
    return this.http.get<WalletModel>(url).pipe(
      tap(_ => console.log(`fetched wallet id=${id}`)),
      catchError(this.handleError<WalletModel>(`getWallet id=${id}`))
    );
  }
}

// export interface Wallet {
//   id: number;
//   name: string;
//   owner: string;
//   description: string;
//   transactions?: Transaction[];
// }


