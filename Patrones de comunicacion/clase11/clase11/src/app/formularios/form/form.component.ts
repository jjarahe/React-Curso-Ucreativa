import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.interface';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: User = {};

  public onSubmit(){
    console.log(this.user);
    this._userService.users.push(this.user);
    alert('Usuario creado exitosamente!');
    this.user = {};
  }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

}
