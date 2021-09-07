import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

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
    return this.http.put<any>("http://localhost:3000/wallets" + id, data)
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
}
