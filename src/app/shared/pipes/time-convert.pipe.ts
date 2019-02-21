import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeConvert'
})
export class TimeConvertPipe implements PipeTransform {
  transform(value: number): string {
    if(value > 0){
      const hours = Math.trunc(value/60);
      const minutes = value % 60;

      if (minutes === 0){
        return hours + ' h';
      }else if (hours === 0){
        return minutes + ' m';
      }else{
        return hours + ' h ' + minutes + ' m'
      }
    }else{
      return '0 h 0 m';
    }
  }
}
