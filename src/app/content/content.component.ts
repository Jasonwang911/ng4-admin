import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  isCollapsed = false;

  menus = [
    {title: '用户管理', children: [
      {src: '/user-list', name: '用户列表'},
      {src: '/add-user', name: '新建用户'}
    ]},
    {title: '设备管理', children: [
      {src: '', name: '设备列表'},
      {src: '', name: '新建设备', children: [
        {src: '', name: 'aaaaa'}
      ]}
    ]},
    {title: '设备型号管理', children: [
      {src: '', name: '设备型号列表'},
      {src: '', name: '新增设备型号'}
    ]},
    {title: 'app&升级管理', children: [
      {src: '', name: 'app列表'},
      {src: '', name: '新增app'}
    ]}
  ]

  constructor() { }

  ngOnInit() {
  }

  logOut() {
    alert('别退了，没这功能');
  }

}
