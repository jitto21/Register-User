import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  imgPreview: string;
  editMode: boolean;
  registerForm = new FormGroup({
    uid: new FormControl(''),
    fname: new FormControl('', [Validators.required]),
    mname: new FormControl(''),
    lname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    pin: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(Object.keys(params).length == 0 && params) {
        this.editMode = false;
        console.log("in add mode")
      }
      else {
        this.editMode = true;
        console.log("in edit mode")
        this.registerForm.setValue({
          uid: params.uid,
          fname: params.fname,
          mname:params.mname,
          lname: params.lname,
          address: params.address,
          pin: params.pin,
          gender: params.gender,
          mobile: params.mobile,
          dob: params.dob,
        });
      }
    })
  }

  onRegisterUser() {
    console.log(this.registerForm.value);
    this.userService.saveUser(this.registerForm.value, this.editMode);
  }

  onFileUpload(event) {
    let file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.imgPreview = fileReader.result.toString();
    }
    fileReader.readAsDataURL(file);
  }

}
