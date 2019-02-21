import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'jiraAge'})
export class JiraAgePipe implements PipeTransform {
  transform(number: number): string {

    if(number > 7){
      return Math.round(number / 7) + 'w';
    } else {
      return number + 'd';
    }
  }
}
