import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = false;
  constructor(private dataService : DataService) { }

  loginUser(payload) {
    return this.dataService.loginUser(payload);
  }
  registerUser(payload) {
    return this.dataService.registerUser(payload);
  }
}
