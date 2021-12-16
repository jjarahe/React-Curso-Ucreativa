import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.interface';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
public users: Array<User> = []

  constructor(private _userService: UserService) {
    this.users = _userService.users
  }

  ngOnInit(): void {
  }

}
