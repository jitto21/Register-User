import { Injectable } from "@angular/core";
import { RegisterUserModel } from '../register-user/register-user.model';

@Injectable({ providedIn: 'root' })

export class UserService {

   users: RegisterUserModel[] = [
    //  {fname: 'John', mname: '', lname: 'Wick',gender: 'Male', mobile: 2255, pin: 569022, address: '82-92 Beaver Street at Pearl Street, New York City'},
    //  {fname: 'John', mname: '', lname: 'Wick',gender: 'Female', mobile: 2255, pin: 569022, address: '82-92 Beaver Street at Pearl Street, New York City' }
  ]

  saveUser(userObj: RegisterUserModel) {
    console.log(userObj);
    this.users.push(userObj);
    console.log("user pushed");
    this.saveToStorage(this.users);
  }

  fetchUsers() {
    return this.users;
  }

  saveToStorage(users: RegisterUserModel[]) {
    sessionStorage.setItem('users', JSON.stringify(users));
    console.log("user saved");
  }

  fetchFromStorage() {
    console.log("user fetching");
    if(sessionStorage.getItem('users')) {
      let users = JSON.parse(sessionStorage.getItem('users'));
      console.log(users);
      users.map(user=> {
        this.users.push(user);
      })
    }
  }
}
