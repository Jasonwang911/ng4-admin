import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../../service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public btnText = '点击登陆';
  results: string[];

  validateForm: FormGroup;
  
    constructor(private fb: FormBuilder, private http: HttpClient, private httpService: HttpService) {
    }
  
    ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        password: [ null, [ Validators.required ] ],
        remember: [ true ],
      });
    }

    getData(data) {
      var d = {username: 'jason', password: '123456'};
      this.httpService.postData('/admin/login', d)
      .subscribe( res => {
        console.log(res)
      })
      
    }

    _submitForm() {
      this.btnText = '正在登陆';
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }

      // this.http.post('http://127.0.0.1:3000/admin/login', {username: "jason", password: "123456"})
      // .subscribe( data => {
      //   this.btnText = '已登录';
      // })
      
    }

}
