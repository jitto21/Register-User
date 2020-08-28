import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  imgPreview: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onRegisterUser(form) {
    console.log(form.value);
    this.userService.saveUser(form.value);
  }

  onFileUpload(event) {
     let file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
      this.imgPreview = fileReader.result.toString();
    }
    fileReader.readAsDataURL(file);
  }

}
