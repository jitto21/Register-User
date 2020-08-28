import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  public users = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.fetchUsers();
  }

}
