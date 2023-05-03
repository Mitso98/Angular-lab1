import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../sharedClassesAndTypes/Iuser';
import { data } from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users_list: IUser[];
  errorMessage: any;
  constructor(private users: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users.getUsers().subscribe({
      next: (data) => (this.users_list = data),
      error: (error) => (this.errorMessage = error),
    });
  }
}
