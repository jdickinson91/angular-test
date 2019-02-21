import {Component, ViewEncapsulation, ElementRef, OnInit, HostBinding, ViewChild} from '@angular/core';
import {GlobalState} from '../app.state';

import {ConfigService} from '../shared/services/config/config.service';
import {LayoutService} from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LayoutComponent implements OnInit {


  constructor(public config: ConfigService,
              private _elementRef: ElementRef,
              private _state: GlobalState,
              private layout_service: LayoutService) {

  }

  ngOnInit() {

  }
}
