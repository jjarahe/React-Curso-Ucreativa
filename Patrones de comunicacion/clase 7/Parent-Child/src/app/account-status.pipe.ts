import { Pipe, PipeTransform } from '@angular/core';
import { UserNameSpace } from './user.namespace';

@Pipe({
  name: 'accountStatusPipe'
})
export class AccountStatusPipe implements PipeTransform {

  transform(value: UserNameSpace.AccountStatusEnum): string {
    let result= ''
    switch(value){
      case 'PENDING': {
        result = 'Pendiente';
        break;
      }
      case 'OPENED': {
        result = 'Habilitado';
        break;
      }
      case 'CLOSED': {
        result = 'Cerrado';
        break;
      }
      default: {
        result = 'N/A';
        break;
      }
    }
    return `Estado: ${result}`;
  }

}
