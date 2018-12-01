import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginUserData = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
