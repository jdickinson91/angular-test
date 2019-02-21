import {Injectable} from '@angular/core'

@Injectable()

export class ArchiveService {
  static archiveMessage(data: number, object: string, archive: boolean){
    let message = '';

    if (archive){
      if (data === 1) {
        message = data + ' ' + object + ' was deactivated.';
      } else {
        message = data + ' ' + object + 's were deactivated.';
      }
    } else {
      if (data === 1) {
        message = data + ' ' + object + ' was activated.';
      } else {
        message = data + ' ' + object + 's were activated.';
      }
    }

    return message;
  }

  constructor() {
  }
}
