import { Component } from '@angular/core';

import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import { COLORS, COLORSINVERT } from '../core';
import { single, multi, generateData } from '../charts/data';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {

  images: any[] = [];
  num = 1;

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

  // line interpolation
  curve = shape.curveBundle.beta(1);
  curveSmallChart = shape.curveLinear;

  colorScheme = {
    domain: [
      '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  colorSchemeSmallChart = {
    domain: [
      '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'
    ]
  };
  schemeType = 'ordinal';
  rangeFillOpacity = 0.15;

  // line, area
  autoScale = true;
  timeline = false;

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;

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
  }];

  constructor() {
    Object.assign(this, {
      single,
      multi
    });

    this.dateData = generateData(2, true, 8);
    this.dateDataSmallChart = generateData(1, false, 5);
    this.dateDataWithRange = generateData(2, true);

    for (this.num; this.num <= 8; this.num += 1) {
      this.images.push(this.num);
    }
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
