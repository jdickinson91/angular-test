import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(@Inject(Injector) private injector: Injector){
    super();
  }

  private get toastrService(): ToastrService{
    return this.injector.get(ToastrService);
  }

  public handleError(error:any): void{

    console.log(error);

    if(error.error.errors) {
      Object.keys(error.error.errors).forEach(value => {
        console.log(error.error.errors[value]);
        this.toastrService.info(
          error.error.errors[value],
          'Error',
          {
            onActivateTick: true
          }
        );
      });
    }else if(error.error){
      console.log(error.error.error);
      this.toastrService.info(
        error.error.error,
        'Error',
        {
          onActivateTick: true
        }
      );
    }else {
      this.toastrService.info(
        error,
        'Error',
        {
          onActivateTick: true
        }
      );
    }

    super.handleError(error);
  }
}
