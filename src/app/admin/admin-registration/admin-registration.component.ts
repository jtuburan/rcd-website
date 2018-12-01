import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  registerUserData = {};
  constructor(private _auth: AuthService, private _router: Router ) { }

  ngOnInit() {
  }
  onRegister() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token),
        console.log(res),
        this._router.navigate(['/admin-registration']);
      },
      err => console.log(err)
    );
    console.log(this.registerUserData);
  }
}
