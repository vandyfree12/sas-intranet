import { Component, ElementRef, NgZone, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { LoadingBarService } from '@ngx-loading-bar/core';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

const SMALL_WIDTH_BREAKPOINT = 960;

@Component({
  selector: 'app-admin',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  private _router: Subscription;
  public mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  url: string;
  sidePanelOpened;
  routeData: any;

  options = {
    dark: false,
    boxed: false,
    collapsed: false,
    dir: 'ltr'
  };

  @ViewChild('sidemenu') sidemenu;
  @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(
    private _element: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    public zone: NgZone,
    public loader: LoadingBarService,
    private titleService: Title) {
    this.mediaMatcher.addListener(mql => zone.run(() => {
      this.mediaMatcher = mql;
    }));
  }

  ngOnInit(): void {

    this.url = this.router.url;

    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      document.querySelector('.app-inner > .mat-drawer-content > div').scrollTop = 0;
      this.url = event.url;
      this.runOnRouteChange();
    });
    this.runOnRouteChange();
  }

  ngOnDestroy(): void  {
    this._router.unsubscribe();
  }

  runOnRouteChange(): void {

    if (this.isOver()) {
      this.sidemenu.close();
    } else {
      this.updatePS();
    }

    this.route.children.forEach((route: ActivatedRoute) => {
      let activeRoute: ActivatedRoute = route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }
      this.routeData = activeRoute.snapshot.data;
    });

    if (this.routeData.hasOwnProperty('heading')) {
      this.setTitle(this.routeData.heading);
    }
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle + ' | SAS - Staff Intranet');
  }

  receiveMessage($event): void {
    this.options = $event;
    this.triggerWindowResize();
  }

  toggleSidenav(): void {
    this.sidemenu.toggle();
    this.triggerWindowResize();
  }

  isOver(): boolean {
    if (this.url === '/messages' ||
      this.url === '/calendar' ||
      this.url === '/media' ||
      this.url === '/maps/leaflet' ||
      this.url === '/taskboard') {
      return true;
    } else {
      return this.mediaMatcher.matches;
    }
  }

  updatePS(): void  {
    if (!this.mediaMatcher.matches) {
      setTimeout(() => {
        this.directiveScroll.update();
      }, 350);
    }
  }

  triggerWindowResize() {
    if (typeof(Event) === 'function') {
      window.dispatchEvent(new Event('resize'));
    } else {
      const evt = window.document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
    }
  }

  toggleFullscreen(): void {
    const elem = this._element.nativeElement.querySelector('.app-inner');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }
}
