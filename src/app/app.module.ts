import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResponsiveModule} from 'ng2-responsive';
import {AppComponent} from './app.component';
import {AppState, InternalStateType} from './app.service';
import {GlobalState} from './app.state';
import {ServicesModule} from './shared/services/services.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {AppErrorHandler} from './utility/app-error-handler';
import {LayoutService} from './layout/layout.service';
// Application wide providers
const APP_PROVIDERS = [AppState, GlobalState, Title];



export type StoreType = {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServicesModule,
    ResponsiveModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      easing: 'ease-in',
    }),
    // AgmCoreModule.forRoot({apiKey: environment.agm_api_key}),
  ],
  providers: [
    APP_PROVIDERS, {
    provide: ErrorHandler,
    useClass: AppErrorHandler
  },
    LayoutService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(public appState: AppState) {
  }
}
