import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from "./posts.model";

@Injectable()
export class PostsService {
  result: any;
  token: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('loginToken')
  }

  getAllPosts() {
    console.log(`get current user`);
    // const headers =  new HttpHeaders({'Authorization': this.token});
    return this.http.get(`${environment.api_url}/api/posts`);
  }

  getPost(id) {
    console.log(`get user profile`);
    const headers =  new HttpHeaders({'Authorization': this.token});
    return this.http.get(`${environment.api_url}/api/posts/${id}`, {headers: headers});
  }

  postContent(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

    return this.http.post(`${environment.api_url}/api/posts`, data, {headers: headers});
  }

  updatePost(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

    return this.http.post(`${environment.api_url}/api/posts`, data, {headers: headers});
  }

  deletePost(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.post(`${environment.api_url}/api/post`, data, {headers: headers});
  }


}
