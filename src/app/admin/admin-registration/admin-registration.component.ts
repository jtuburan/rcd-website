import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    this._auth.registerUser().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    console.log(form.value);
  }
}
