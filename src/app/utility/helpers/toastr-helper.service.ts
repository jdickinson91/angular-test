import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrHelperService{

  constructor(private toastr_service: ToastrService){}

  setCreateUpdateMessage(is_create: boolean, pmessage: string){

    const action = is_create ? 'created' : 'updated';
    const message = pmessage + ' was ' + action;

    this.toastr_service.success(message, 'Success');
  }
}
