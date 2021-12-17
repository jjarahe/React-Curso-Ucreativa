import { Component, OnInit } from '@angular/core';
import { DataNameSpace } from 'src/app/data.namespace';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: DataNameSpace.User = {
    username: '',
    password: ''
  }

  public registeredUsers: Array<DataNameSpace.User> = [];

  public userFound: DataNameSpace.User = {
    username: '',
    password:''
  };

  public onSubmit(){
    this.userFound = this._userService.users.filter(obj => obj.username == this.user.username && obj.password == this.user.password)[0]
    if(this.userFound){
      console.log(`Usuario logueado con exito! Username: ${this.user.username} Password: ${this.user.password}`)
      alert("Usuario autenticado exitosamente!");
      return;
    }
    console.log(`Usuario incorrecto! Username: ${this.user.username} Password: ${this.user.password}`)
    alert("Verifique su usuario o contrasena, ya que alguno es incorrecto!");
  }


  constructor(private _userService: DataService) {
    this.registeredUsers = _userService.users
  }

  ngOnInit(): void {
  }

}
