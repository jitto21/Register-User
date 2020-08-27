import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  imgPreview: string;

  constructor() { }

  ngOnInit(): void {
  }

  onRegisterUser(form: NgForm) {
    console.log(form);
  }

  onFileUpload(event) {
    let file = (event.target as HTMLInputElement).files[0];
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
      this.imgPreview = fileReader.result.toString();
    }
    fileReader.readAsDataURL(file);
  }

}
