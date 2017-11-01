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

  constructor(private http: HttpClient) { }

  // post请求的封装
  postData(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data)
  }

}
