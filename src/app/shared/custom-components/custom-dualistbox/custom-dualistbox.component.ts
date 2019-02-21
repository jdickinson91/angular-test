import { Component, EventEmitter, IterableDiffers, Input, Output } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-custom-dualistbox',
  templateUrl: './custom-dualistbox.component.html',
  styleUrls: ['./custom-dualistbox.component.scss']
})
export class CustomDualistboxComponent extends DualListComponent  {

  constructor(differs:IterableDiffers) {
    super(differs);
  }
}
