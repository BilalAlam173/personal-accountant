import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = false;
  user = new BehaviorSubject<User>(null);
  constructor(private dataService : DataService) { }

  loginUser(payload) {
    return this.dataService.loginUser(payload);
  }
  getUser(){
    return this.user.asObservable();
  }
  setUser(user:User){
    this.user.next(user);
  }
  registerUser(payload) {
    return this.dataService.registerUser(payload);
  }
}
