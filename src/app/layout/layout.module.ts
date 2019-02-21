import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {AuthGuard} from '../auth/auth.guard';
import {NavDropDownDirectives} from '../shared/directives/nav-dropdown.directive';

import {ScrollbarDirective} from '../shared/directives/scrollbar.directive';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout.component';
import {LayoutRoutes} from './layout.routes';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {SearchComponent} from './top-navbar/search/search.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    LayoutComponent,
    LeftSidebarComponent,
    TopNavbarComponent,
    SearchComponent,
    RightSidebarComponent,
    ScrollbarDirective,
    NavDropDownDirectives
  ],
  imports: [
    LayoutRoutes,
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class LayoutModule {}
