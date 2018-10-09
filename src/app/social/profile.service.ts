import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Profile} from "./profile.model";

@Injectable()
export class ProfileService {

  result: any;
  loginToken;
  constructor(private http: HttpClient) {
    this.loginToken = localStorage.getItem('loginToken')
  }

  getPeople(id) {
    console.log('getPeople service id :: ', JSON.stringify(id));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.get(`${environment.api_url}/api/people/${id}`, {headers: headers});
  }

  getPeoples() {
    console.log('get all people service  :: ');
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.get(`${environment.api_url}/api/peoples`, {headers: headers});
  }

  getUerProfile() {
    console.log(`get user profile`);
    const headers =  new HttpHeaders({'Authorization': this.loginToken});
    return this.http.get(`${environment.api_url}/api/profile`, {headers: headers});
  }

}
