import { Injectable } from '@angular/core';

@Injectable()
export class ObjectHelperService {

  static assignPropertiesToObject (object_1, object_2) {

    for (const property in object_1) {

      if (object_2.hasOwnProperty(property) && object_1.hasOwnProperty(property)) {

        object_1[property] = object_2[property];
      }
    }
  }

  constructor () {
  }
}
