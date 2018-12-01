import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginUserData = {};
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token),
        this._router.navigate(['/admin-dashboard']);
        console.log(res)
      },
      err => console.log(err)
    );
  }

}
