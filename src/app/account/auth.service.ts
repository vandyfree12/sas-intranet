import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  loginToken;
  constructor(private http: HttpClient) {
    this.loginToken = localStorage.getItem('loginToken')
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem('token')).id;
  }

  getCurrentUser() {
    console.log(`get current user`);
    const headers =  new HttpHeaders({'Authorization': this.loginToken});
    return this.http.get(`${environment.api_url}/api/users/current`, {headers: headers});
  }

  login(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

    return this.http.post(`${environment.api_url}/api/users/login`, data, {headers: headers});
  }

  signup(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

    return this.http.post(`${environment.api_url}/api/signup`, data, {headers: headers});
  }

  logout() {
    localStorage.clear();
  }

}
