import {NativeDateAdapter} from '@angular/material';

export class MyDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {

    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return date.toDateString();
    }
  }

  /**
   * The first day of the week will be Monday.
   * @returns {number}
   */
  getFirstDayOfWeek(): number{
    return 1;
  }
}
