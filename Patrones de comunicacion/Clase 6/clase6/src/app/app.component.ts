import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public username: string = '';
  public password: string = '';
  public email: string = '';
  public dateCreated: Date = new Date();
  public edad: Number = 0;
  public countries: string[] = ['Costa Rica','Panama','Colombia','Estados Unidos','Nicaragua','El Salvador'];
  public country: string = '';

  public users: Array<User> = [];

  public registerNewUser(): void {
    console.log(this.username);
    console.log(this.password);
    console.log(this.email);
    console.log(this.dateCreated);
    const user: User = {
      username: this.username,
      password: this.password,
      email: this.email,
      dateCreated: this.dateCreated,
      edad: this.edad,
      country: this.country
    }
    alert('Usuario agregado exitosamente!');
    this.users.push(user);
    console.log(this.users);
  }

}
