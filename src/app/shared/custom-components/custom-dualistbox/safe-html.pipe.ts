import {DomSanitizer} from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'safe'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}

  transform(value: any): any {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
