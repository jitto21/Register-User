import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  public users = []

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.fetchUsers();
  }

  onDelete() {

  }

  onEdit(user) {
    let navExtras: NavigationExtras = {
      queryParams: user
    }
    this.router.navigate(['/register'], navExtras);
  }

}
