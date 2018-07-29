import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private _authService:AuthenticationService,private route:Router) { }

  ngOnInit() {
    this._authService.getUser().subscribe((res:User)=>{
      this.user = res;
    })
  }

  logout(){
    localStorage.clear();
    this._authService.setUser(null);
    this.route.navigate(['/login']);
  }

}
