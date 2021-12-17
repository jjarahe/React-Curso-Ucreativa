import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    public users: Array<User> = [];

  constructor() { }
}
