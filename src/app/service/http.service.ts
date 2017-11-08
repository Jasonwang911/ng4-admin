import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HttpService {

  // 生产环境
  // baseUrl = 'http://47.95.223.216:3000';
  // 本地环境
  baseUrl = 'http://127.0.0.1:3000';
  // 模拟数据
  // baseUrl = '';

  PRD_NAME = ['爽得宝', '安鑫富-稳增计划', '华夏安康优选债券A', '博时合慧货币B（004137）'];
  PRD_TYPE_ID = ['货币基金', '理财产品', '纯债基金'];
  CREATE_TIME: string = '2017-10-31';
  state = ['0', '1'];
    
  productDetail = [];

  constructor(private http: HttpClient) { }

  // post请求的封装
  postData(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data)
  }

  getProductDetail() {
    for(let i = 0; i < 100; i++) {
      this.productDetail.push(new Product(i, this.PRD_NAME[Math.floor(Math.random()*5)], this.PRD_TYPE_ID[Math.floor(Math.random()*4)], this.CREATE_TIME, this.state[Math.floor(Math.random()*2)]));
    }
    return this.productDetail;
  }

}

export class Product {

  constructor(
    public ID: number,
    public PRD_NAME: string,
    public PRD_TYPE_ID: string,
    public CREATE_TIME: string,
    public state: string
  ) {

  }
}
