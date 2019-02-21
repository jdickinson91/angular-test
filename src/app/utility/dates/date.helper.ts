import * as moment from 'moment';

export class DateHelper {

  /**
   *
   * @param {string} date
   * @returns {number}
   */
  public static getDiffInDays(date: string){

    const tdate = moment(date);
    const now  = moment();

    return now.diff(tdate, 'days');
  }
}
