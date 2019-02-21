import { Pipe, PipeTransform } from '@angular/core';
import { DateHelper } from '../../utility/dates/date.helper';

@Pipe({name: 'age'})
export class AgePipe implements PipeTransform{
  transform(date: string): number {

    if(!date){
      return null;
    }

    return DateHelper.getDiffInDays(date);
  }
}
