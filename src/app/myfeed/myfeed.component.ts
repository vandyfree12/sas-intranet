import { Component,  OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from "./posts.model";


import {
  MatSnackBar,
  MatSnackBarConfig,
  MatTableDataSource,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition} from '@angular/material';

import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import { COLORS, COLORSINVERT } from '../core';
import { single, multi, generateData } from '../charts/data';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';

@Injectable()
@Component({
  selector: 'app-myfeed',
  templateUrl: './myfeed.component.html',
  styleUrls: ['./myfeed.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class MyfeedComponent implements OnInit {
  message = '';

 posts = {};

  constructor(private http: HttpClient,public snackBar: MatSnackBar) {
  }
  ngOnInit(){

    console.log('hello');
    let post =  this.http.get(`${environment.api_url}/api/posts`);
    //this.getAllPostContent();
    post.subscribe(res => {
      this.posts = res;
      console.log('query all post ~~',this.posts);
    },error => {
      console.log(`error get post  content :: ${JSON.stringify(error)}`);
    }
  )
   // console.log(this.posts);
  }
  //messages: any[] = this.posts;

}

