import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { HttpService } from './../../../service/http.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {

  data = [];

  userAddList = {
    username: '',
    name: '',
    role: '',
    userstate: ''
  }

  isVisible = false;
  
  showModal = (data, i) => {
    console.log(data);
    console.log(i)
    this.formData = data;
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    console.log(this.demoValue);
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }


  showConfirm = (data) => {
    this.confirmServ.confirm({
      title  : '您是否确认要删除这项内容',
      content: '<b>如果删除请点击确认按钮，否则点击取消</b>',
      onOk() {
        console.log(data);
      },
      onCancel() {
      }
    });
  }

  // 增 和 改 的数据
  demoValue = 3;
  formData = {}

  constructor(private httpService: HttpService, private confirmServ: NzModalService) {
    
  }

  ngOnInit() {
    this.data = this.httpService.getProductDetail();
  }

  _console($event) {
    console.log(this.userAddList)
  }

}
