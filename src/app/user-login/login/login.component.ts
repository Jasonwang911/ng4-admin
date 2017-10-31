import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public btnText = '点击登陆';
  results: string[];

  validateForm: FormGroup;
  
    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
  
    ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        password: [ null, [ Validators.required ] ],
        remember: [ true ],
      });
    }

    getData() {
      this.http.post('/admin/login',  {username: 'jason', password: '123456'})
      .subscribe( resp => {
        // 
        // console.log(data);
        // Here, resp is of type HttpResponse<MyJsonData>.
        // You can inspect its headers:
        console.log(resp);
      })
    }

    _submitForm() {
      this.btnText = '正在登陆';
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }

      this.http.post('http://localhost:3000/admin/login', {username: "jason", password: "123456"})
      .subscribe( data => {
        // 
        // console.log(data);
      })
      setTimeout( () => {
        this.btnText = '已登录';
      }, 3000);
      
    }

}
