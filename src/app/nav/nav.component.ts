import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public links = [
    {name: 'Register', url: '/register'},
    {name: 'Users', url: '/show'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
