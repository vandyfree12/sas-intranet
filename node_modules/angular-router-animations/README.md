## Installation
`npm install --save angular-router-animations`

# Angular Routing Animations
A collection of Angular 2+ Animations


## Exports
| Export       | Description                                                                   |
| ------------ | ----------------------------------------------------------------------------- |
| `moveIn`     | Animates element to move and fade in on enter and move and fade out on leave. |
| `fallIn`     | Animates element to fall and fade in on enter and fall and fade out on leave. |
| `fadeInOut`  | Animates element to fade in on enter and fade out on leave.                   |
| `growShrink` | Animates element to grow on enter and shrink on leave.                        |


## Usage
##### Component
```
import { fallIn, fadeInOut, growShrink } from 'angular-router-animations';
@Component({
  selector: 'home-art',
  templateUrl: './home.art.component.html',
  styleUrls: ['./home.art.component.css'],
  animations: [fallIn(), fadeInOut(), growShrink()],
})
```

##### Template
```
<div class="arrow right" *ngIf="indicators" [@fadeInOut] (click)="nextImg()"></div>

<div class="pic-wrapper">
      <img class="pic" src="{{activePhoto.url}}" [@growShrink] [@fadeInOut]="imgState" />
</div>
```