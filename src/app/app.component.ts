import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WalletModel } from './models/wallet.model';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-economics';
  // walletsData: Wallet[] = [];
  formValue !: FormGroup;
  walletModelObj : WalletModel = new WalletModel();

  showAdd!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private api : ApiService
    ) {
      // api.editWallet$.subscribe(
      //   wallet => {
      //       this.onEdit(wallet);
      //   });
  }

  ngOnInit(): void {
    // this.formValue =  this.formBuilder.group({
    //   walletName : [''],
    //   ownerName : [''],
    //   walletDescription : [''] 
    // })
  }

  // getAllWallets() {
  //   this.api.getWallets().subscribe(res => {
  //     this.walletsData = res;
  //   })
  // }

  // postWalletDetails() {
  //   this.walletModelObj.name = this.formValue.value.walletName;
  //   this.walletModelObj.owner = this.formValue.value.ownerName;
  //   this.walletModelObj.description = this.formValue.value.walletDescription;

  //   this.api.postWallet(this.walletModelObj)
  //   .subscribe(res => {
  //     console.log(res);
  //     alert("Wallet Added Succesfully");
  //     let ref = document.getElementById('cancel');
  //     ref?.click() ;
  //     console.log(123);
  //     this.formValue.reset();
  //     this.walletsData.push(res);
  //   },
  //   err => {
  //     alert("Something went wrong");
  //   })
  // }

  // deleteWallet(wallet: any) {
  //   this.api.deleteWallet(wallet.id).subscribe(res => {
  //     alert('Wallet Deleted Succesfully');
  //     // this.getAllWallets();
  //   })
  // }

  // saveWalletDetails(){
  //   this.walletModelObj.name = this.formValue.value.walletName;
  //   this.walletModelObj.owner = this.formValue.value.ownerName;
  //   this.walletModelObj.description = this.formValue.value.walletDescription;

  //   this.api.updateWallet(this.walletModelObj, this.walletModelObj.id)
  //   .subscribe(res => {
  //     alert("Updated Succesfully");
  //     let ref = document.getElementById('cancel');
  //     ref?.click() ;
  //     this.formValue.reset();
  //     // this.getAllWallets();
  //   });
  // }
  
  // onEdit(wallet: any) {
  //   this.api.setShowAdd(false);
  //   this.api.setShowUpdate(true);
  //   this.showAdd = this.api.getShowAdd();
  //   this.showUpdate = this.api.getShowUpdate();
  //   this.walletModelObj.id = wallet.id;
  //   this.formValue.controls['walletName'].setValue(wallet.name);
  //   this.formValue.controls['ownerName'].setValue(wallet.owner);
  //   this.formValue.controls['walletDescription'].setValue(wallet.description);
  // }

  // clickAddWallet() {
  //   this.formValue.reset();
  //   this.api.setShowAdd(true);
  //   this.api.setShowUpdate(false);
  //   this.showAdd = this.api.getShowAdd();
  //   this.showUpdate = this.api.getShowUpdate();
  //   // this.api.showAdd = true;
  //   // this.api.showUpdate = false;
  // }
}
