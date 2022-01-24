import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userClicked?: IUser;
  users: IUser[] = [];

  userFilter: IUser[] = []
  constructor(private userService: UserService) { }
  getAll() {
    return this.users;
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.userFilter = this.users;
  }


  clickUser(id: number){
    let user = this.users.filter(user => {
      return user.id === id
    });

    this.userClicked = user[0];
  }

  search(event: any){
    let name = event;
    this.userFilter = (name) ? this.getUserByName(name) : this.users
  }

  getUserByName(name: string){
    return this.users.filter(user => {
      return user.name == name
    })
  }

}
