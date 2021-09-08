export class TransactionModel {
    id: number = 0;
    type: string = "";
    walletId: number = 0;
    date: Date = new Date();
    description:string = "";
    amount: number = 0;
    currency: string = "";
}