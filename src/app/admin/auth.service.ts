import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/api/register";
  private _loginUrl = "http://localhost:8080/api/login";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser( user ) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    // !! double negate checking if its true or false
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

}
