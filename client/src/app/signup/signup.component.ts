import { AlertService } from 'ngx-alerts';
import { AuthenticationService } from './../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './../password-validation';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private router: Router, private authenticationService: AuthenticationService, private alertService: AlertService ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, PasswordValidation.MatchPassword);
  }
  passwordMatchValidator = function (signupForm: FormGroup) {
    return signupForm.get('password').value === signupForm.get('confirmPassword').value ? null : { 'mismatch': true };
  }
  
  registerUser(user) {
    let payload = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password
    };
    // console.log(payload);
    this.authenticationService.registerUser(payload)
      .subscribe(
        res => {
          console.log(res, 'api');
          // this.alertService.success(res['msg']);
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err, 'api');
          this.alertService.danger(err['error'].message);
        }
      );
  }
}
