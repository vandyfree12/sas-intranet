import { Component } from '@angular/core';

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

const ELEMENT_DATA: Element[] = [
{
  'position': 1,
  'country': 'Bouvet Island',
  'value': 686
},
{
  'position': 2,
  'country': 'Vanuatu',
  'value': 718
},
{
  'position': 3,
  'country': 'South Africa',
  'value': 342
},
{
  'position': 4,
  'country': 'Macedonia',
  'value': 909
},
{
  'position': 5,
  'country': 'Afghanistan',
  'value': 960
}];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class DashboardComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 11;

  single: any[];
  multi: any[];
  dateData: any[];
  dateDataSmallChart: any[];
  dateDataWithRange: any[];
  range = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = 0;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  roundEdges = false;

  // line interpolation
  curve = shape.curveBundle.beta(1);
  curveSmallChart = shape.curveLinear;

  colorScheme = {
    domain: COLORS
  };
  colorSchemeSmallChart = {
    domain: COLORSINVERT
  };
  schemeType = 'ordinal';
  rangeFillOpacity = 0.15;

  // line, area
  autoScale = true;
  timeline = false;

  // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;

  // newsfeed
  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
  }, {
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
  }, {
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
  }, ];

  displayedColumns = ['position', 'country', 'value'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public snackBar: MatSnackBar) {
    Object.assign(this, {
      single,
      multi
    });

    this.dateData = generateData(2, true, 8);
    this.dateDataSmallChart = generateData(1, false, 5);
    this.dateDataWithRange = generateData(2, true);

    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = 5000;

    this.snackBar.open('Welcome to SAS Finance Group, Demo Intranet app', '', config);
  }

  get dateDataWithOrWithoutRange() {
    if (this.range) {
      return this.dateDataWithRange;
    } else {
      return this.dateData;
    }
  }

  get dateDataSmallChartRange() {
    return this.dateDataSmallChart;
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}

export interface Element {
  position: number;
  country: string;
  value: number;
}
