import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {


  public login(user: string, password: string, index: number){
    if(this._userService.users[index].username == user && this._userService.users[index].password == password ){
      alert("Login correcto!");
      return;
    }
    alert("Login incorrecto!");
  }

  constructor(private _userService: UserService) { }
}
