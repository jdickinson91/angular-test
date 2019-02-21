import {Injectable, Optional} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import 'rxjs/';

@Injectable()
export class LayoutService {

  private showWorkInstructionModal = new BehaviorSubject<{show:boolean, type: number}>({ show:false, type: 0});
  private refresh_table = new BehaviorSubject<boolean>(false);

  showWorkInstructionModal$ = this.showWorkInstructionModal.asObservable();
  refresh_table$ = this.refresh_table.asObservable();

  constructor(){}

  setShowWorkInstructionModal(show:boolean, type: number){
    this.showWorkInstructionModal.next({show:show, type: type});
  }

  setRefreshTable(bool: boolean){
    this.refresh_table.next(bool);
  }
}
