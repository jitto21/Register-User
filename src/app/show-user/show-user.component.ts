import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  public users = [
    {fname: 'John', mname: '', lname: 'Wick',gender: 'Male', mobile: '2255', address: '82-92 Beaver Street at Pearl Street, New York City' },
    {fname: 'John', mname: '', lname: 'Wick',gender: 'Female', mobile: '2255', address: '82-92 Beaver Street at Pearl Street, New York City' },
    {fname: 'John', mname: '', lname: 'Wick',gender: 'Male', mobile: '2255', address: '82-92 Beaver Street at Pearl Street, New York City' },
    {fname: 'John', mname: '', lname: 'Wick',gender: 'Male', mobile: '2255', address: '82-92 Beaver Street at Pearl Street, New York City' },
    {fname: 'John', mname: '', lname: 'Wick',gender: 'Female', mobile: '2255', address: '82-92 Beaver Street at Pearl Street, New York City' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
