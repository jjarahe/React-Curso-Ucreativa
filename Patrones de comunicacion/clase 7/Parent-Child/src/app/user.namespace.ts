export namespace UserNameSpace {
   export interface User {
    name: string;
    accoutNumber: string;
    amount: number;
    status: AccountStatusEnum;
   }

   export enum AccountStatusEnum {
     OPENED = 'OPENED',
     CLOSED = 'CLOSED',
     PENDING = 'PENDING'
   }
}
