import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

import { IssuesModel } from './issues.model';

@Injectable()
export class IssuesService {
  loginToken;
  constructor(private http: HttpClient) {
    this.loginToken = localStorage.getItem('loginToken');
  }

  getAllIssues() {
    console.log(`GET all issues`);
    const headers =  new HttpHeaders({'Authorization': this.loginToken});
    return this.http.get(`${environment.api_url}/api/users/current`, {headers: headers});
  }

  getIssue() {
    console.log(`GET issue`);
    const headers =  new HttpHeaders({'Authorization': this.loginToken});
    return this.http.get(`${environment.api_url}/api/users/current`, {headers: headers});
  }

  postIssue(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers =  new HttpHeaders({'Authorization': this.loginToken});
    return this.http.post(`${environment.api_url}/api/issues`, data, {headers: headers});
  }

  updateIssue() {
    console.log('@injectable postData :: ');
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.get(`${environment.api_url}/api/signup`, {headers: headers});
  }

  removeIssue() {
    console.log('@injectable postData :: ');
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.get(`${environment.api_url}/api/signup`, {headers: headers});
  }

}
