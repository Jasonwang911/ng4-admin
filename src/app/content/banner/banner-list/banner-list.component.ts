import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {

  userAddList = {
    username: '',
    name: '',
    role: '',
    userstate: ''
  }

  constructor() { }

  ngOnInit() {
  }

  _console($event) {
    console.log(this.userAddList)
  }

}
