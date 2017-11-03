import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  
    constructor(private fb: FormBuilder, private http: HttpClient, private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    }
  
    ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        password: [ null, [ Validators.required ] ],
        remember: [ true ],
      });
    }

    _submitForm() {
      this.btnText = '正在登陆';
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }

      let data = {username: this.validateForm.value.userName, password: this.validateForm.value.password};

      this.httpService.postData('/admin/login', data)
      .subscribe( 
        (res) => {
          this.router.navigate(['/admin']);
        },
        (err) => {
          this.btnText = '登陆';
        }
    )
      
    }

}
