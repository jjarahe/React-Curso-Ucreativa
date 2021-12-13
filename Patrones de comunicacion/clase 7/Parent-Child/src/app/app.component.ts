import { Component } from '@angular/core';
import { UserNameSpace } from './user.namespace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public users: Array<UserNameSpace.User> = [];

  public onUserCreated(user: UserNameSpace.User){
    console.log('Hola esto es el app component y estoy recibiendo este objeto', user)
    this.users.push(user);
  }

}
