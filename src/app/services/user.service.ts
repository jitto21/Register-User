import { Injectable } from "@angular/core";
import { RegisterUserModel } from '../register-user/register-user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Injectable({ providedIn: 'root' })

export class UserService {

   users: RegisterUserModel[] = [
    //  {fname: 'John', mname: '', lname: 'Wick',gender: 'Male', mobile: 2255, pin: 569022, address: '82-92 Beaver Street at Pearl Street, New York City'},
    //  {fname: 'John', mname: '', lname: 'Wick',gender: 'Female', mobile: 2255, pin: 569022, address: '82-92 Beaver Street at Pearl Street, New York City' }
  ]

  constructor(private ngbModal: NgbModal) {}

  saveUser(userObj: RegisterUserModel, editMode: boolean, age) {
    if(editMode == true) {
      console.log("edit mode in service ",userObj.uid);
      this.users.map(user=> {
        if(user.uid == +userObj.uid) { //match the user in users array
          Object.assign(user, userObj) // save the edited user details to existing user
          return;
        }
      })
    }
    else {
      console.log("add mode in service ", userObj.uid);
      let uid: number = Math.floor(Math.random() * Math.floor(10000000));
      userObj['uid'] = uid;
      userObj['age'] = age;
      console.log(userObj);
      this.users.push(userObj);
    }
    console.log("user pushed");
    this.saveToStorage(this.users);
    const modalRef = this.ngbModal.open(ModalComponent, { size: 'sm' });
    modalRef.componentInstance.message = editMode ? 'User Updated' : 'User Saved';
  }

  fetchUsers() {
    return this.users;
  }

  saveToStorage(users: RegisterUserModel[]) {
    sessionStorage.setItem('users', JSON.stringify(users));
    console.log("user saved");
  }

  fetchFromStorage() {
    console.log("%cuser fetching", "color: red;");
    if(sessionStorage.getItem('users')) {
      let users = JSON.parse(sessionStorage.getItem('users'));
      console.table(users);
      users.map(user=> {
        this.users.push(user);
      })
    }
  }
}
