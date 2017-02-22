import { Component, OnInit } from '@angular/core';
import {User} from "./user";
@Component({
  selector: 'someApp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
username : string
  iconName: string
  iconSize: number
  users : User[]

  constructor() {
    this.users = [
      {name : "emil", age : 12},
      {name : "esben", age : 15}
    ];
  }

  ngOnInit() {
  }

}
