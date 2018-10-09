import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Angular Material
import {
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatGridListModule} from '@angular/material';
// Angular Flexlayout
import { FlexLayoutModule } from '@angular/flex-layout';
// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// ngx-loading-bar
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

// ngx-perfect-scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// google maps
import { AgmCoreModule } from '@agm/core';
// Template core components
import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  OptionsComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective } from './core';
import { UICarouselModule } from 'ui-carousel';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AuthService} from './account/auth.service';
import {AuthGuard} from './account/auth-guard.service';
import {Ng2FabSpeedDialModule} from 'ng2-fab-speed-dial';
import {EcoFabSpeedDialModule} from '@ecodev/fab-speed-dial';
import {AvatarModule} from 'ngx-avatar';
import {ProfileService} from './social/profile.service';
import {PostsService} from './posts/posts.service';
import {IssuesService} from './tables/issues.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    OptionsComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule,
    FlexLayoutModule,
    LoadingBarRouterModule,
    LoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAsQi8vzHfqrt33xQww77MN1Bg84iLSeOM'}),
    PerfectScrollbarModule,
    SharedModule,
    Ng2FabSpeedDialModule,
    EcoFabSpeedDialModule,
    AvatarModule,
    UICarouselModule

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthService,
    AuthGuard,
    ProfileService,
    PostsService,
    IssuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
