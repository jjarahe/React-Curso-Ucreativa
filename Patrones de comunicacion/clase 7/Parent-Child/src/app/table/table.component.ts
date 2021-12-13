import { Component, Input, OnInit } from '@angular/core';
import { UserNameSpace } from '../user.namespace';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users: Array<UserNameSpace.User> = [];//Todos los inputs van con corchetes cuadrados en el HTML del app Component
  //public users: Array<UserNameSpace.User> = [];

  public status = UserNameSpace.AccountStatusEnum;

  public changeAccountStatus(index: number, newStatus: UserNameSpace.AccountStatusEnum){
    this.users[index].status = newStatus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
