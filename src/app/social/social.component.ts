import {Component, OnInit} from '@angular/core';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';
import {Profile} from "./profile.model";
import {ProfileService} from "./profile.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class SocialComponent implements OnInit {
  profile;
  email;
  people;
  images: any[] = [];
  num = 1;
  token: any;
  pieChartColors: any[] = [{
    backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
  }];

  pieOptions: any = {
    responsive: true,
    legend: {position: 'right'}
  };

  pieChartLabels: string[] = ['MS Word', 'Typing', 'Sage Pastel'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType = 'pie';

  constructor(private profileService: ProfileService, private router: ActivatedRoute) {
    this.getStaffProfile();
    for (this.num; this.num <= 9; this.num += 1) {
      this.images.push(this.num);
    }
    this.email = localStorage.getItem('email');
  }

  ngOnInit(){
    this.getStaffProfile();
  }

  getPeopleById (){
    this.router.params.subscribe((params) => {
      // let id = params['id'];
      let id = 3;

      this.profileService.getPeople(id)
        .subscribe(res=>this.profile = res );
    })
  }

  getAllPeople () {
    console.log('getAllPeople response =', this.people);
    this.profileService.getPeoples()
      .subscribe(res => this.people = res);
  }

  getStaffProfile () {
    this.profileService.getUerProfile()
      .subscribe(res => {
          this.profile = res;
          console.log('user profile ~~',this.profile);
          console.log('get user >>>',this.profile.user)
        },
        error => {
          console.log(`Error getting profile :: ${JSON.stringify(error)}`);
        }
      )

  }
}
