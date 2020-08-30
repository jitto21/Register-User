import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

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
  todayDate: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.route.queryParams.subscribe(params => {
      if(Object.keys(params).length == 0 && params) {
        this.editMode = false;
        console.log("%cin add mode",'color: blue')
      }
      else {
        this.editMode = true;
        console.log("%cin edit mode",'color: yellow;')
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
    let age = this.calcAge(this.registerForm.get('dob').value);
    console.log(age);
    this.userService.saveUser(this.registerForm.value, this.editMode, age);
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

  calcAge(dateString) {
    console.log(dateString)
    var dateParts = dateString.split('-');
    var dob = new Date(+dateParts[0], +dateParts[1]-1, +dateParts[2]);
    console.log(dob)
    return (new Date((Date.now() - dob.getTime())).getUTCFullYear() -1970);
  }

}
