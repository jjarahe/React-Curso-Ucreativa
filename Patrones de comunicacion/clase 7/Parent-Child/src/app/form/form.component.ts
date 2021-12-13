import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserNameSpace } from '../user.namespace';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public name: string = '';
  public accountNumber: string = '';
  public amount: number = 0;

  @Output() onUserCreated = new EventEmitter<UserNameSpace.User>(); /*Evento para enviar los datos al componente padre*/

  onSubmit(){
    const user: UserNameSpace.User = {
      name: this.name,
      accoutNumber: this.accountNumber,
      amount: this.amount,
      status: UserNameSpace.AccountStatusEnum.PENDING
    }
    console.log('Aqui esyoy')
    alert('Usuario creado exitosamente!!!')
    this.onUserCreated.next(user) /*Usamos el Output declarado arriba para enviar el evento al componente padre*/
  }

  constructor() { }

  ngOnInit(): void {
  }

}
