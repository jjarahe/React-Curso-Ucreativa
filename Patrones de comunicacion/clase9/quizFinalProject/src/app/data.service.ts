import { Injectable } from '@angular/core';
import { DataNameSpace } from './data.namespace';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public authors: Array<DataNameSpace.Author> = [];
  
  public users: Array<DataNameSpace.User> = [
    {
      username: 'user1',
      password: 'user1',
      createdDate: new Date()
    },
    {
      username: 'user2',
      password: 'user2',
      createdDate: new Date()
    },
    {
      username: 'user3',
      password: 'user3',
      createdDate: new Date()
    }
  ];

  constructor() { }
}
