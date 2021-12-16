import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/auth-user.service';
import { User } from 'src/app/user.interface';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = {};
  public userValidatation: Array<User> = [];
  public index: number = 0;

  public onSubmit(){
    this.userValidatation = this._userService.users.filter(obj => obj.username == this.user.username)

  }

  constructor(private _userService: UserService, private _authService: AuthUserService) {

  }

  ngOnInit(): void {
  }

}
