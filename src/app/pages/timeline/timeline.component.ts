/* tslint:disable:max-line-length */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  stacked = false;

  timeline: Object[] = [{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',
    date: 1427207139000,
    color: 'mat-grey',
  }, {
    text: 'Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    date: 1427207139000,
    color: 'mat-purple',
  }, {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 1427207139000,
    color: 'mat-green',
  }, {
    text: '3 more people joined your campaign.',
    date: 1427207139000,
    color: 'mat-lime',
  }, {
    text: 'Six new friend requests',
    date: 1427207139000,
    color: 'mat-brown',
  }];
}
