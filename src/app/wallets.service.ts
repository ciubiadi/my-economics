import { Injectable } from '@angular/core';
import { Transaction } from './transaction.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  private walletsUrl = 'http://localhost:3000/wallets/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
    ) { }

  public getWallets(): Observable<Wallet[]> {
    return this.httpClient.get<Wallet[]>('http://localhost:3000/wallets');
  }

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

  public getWallet(id: number): Observable<Wallet> {
    const url = `${this.walletsUrl}/${id}`;
    return this.httpClient.get<Wallet>(url).pipe(
      tap(_ => console.log(`fetched wallet id=${id}`)),
      catchError(this.handleError<Wallet>(`getWallet id=${id}`))
    );
  }
}



export interface Wallet {
  id: number;
  name: string;
  owner: string;
  description: string;
  transactions?: Transaction[];
}


