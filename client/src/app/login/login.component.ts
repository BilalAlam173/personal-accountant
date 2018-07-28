import { AuthenticationService } from './../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userlogin_response;
  errMessage;

  constructor(private route: Router, private authenticationService: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
    });
  }

  loginUser(user) {

    let payload = {
      email: user.email,
      password: user.password
    };
    console.log(payload);
    this.authenticationService.loginUser(payload)
      .subscribe(
        res => {
          console.log(res); 
            this.userlogin_response = res;
            localStorage.setItem('userInfo', JSON.stringify(this.userlogin_response));
            this.authenticationService.loggedIn = true;
            this.alertService.success('Login SuccesFull');
            this.route.navigate(['/home']);
        },
        err => {
          this.errMessage = err['error'].message;
          this.alertService.danger(err['error'].message);
          console.log(err);
        }
      );
  }

}
