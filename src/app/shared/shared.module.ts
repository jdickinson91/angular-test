import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';
// Angular
// https://angular.io/
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AngularDualListBoxModule} from 'angular-dual-listbox';
import {TextMaskModule} from 'angular2-text-mask';
import {PasswordStrengthBarModule} from 'ng2-password-strength-bar';
import {AccordionModule, CollapseModule} from 'ngx-bootstrap';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PopoverModule} from 'ngx-bootstrap/popover';
// Angular Material
// https://material.angular.io/
// ngx-bootstrap4
// http://valor-software.com/ngx-bootstrap/index-bs4.html#/
import {TabsModule} from 'ngx-bootstrap/tabs';
import {MalihuScrollbarModule} from 'ngx-malihu-scrollbar/dist/lib';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NgxSelectModule} from 'ngx-select-ex';
// UI Shared Components
import {FooterComponent} from '../layout/footer/footer.component';
import {DatatableService} from '../utility/datatable/datatable.service';
import {DateHelper} from '../utility/dates/date.helper';
import {MyDateAdapter} from '../utility/dates/my-date-adapter';
import {ArchiveService} from '../utility/helper-services/archive.service';
import {InputMasks} from '../utility/helpers/input-masks';
import {RegexPatterns} from '../utility/helpers/regex-patterns';
import {ToastrHelperService} from '../utility/helpers/toastr-helper.service';
import {AppBackdropComponent} from './components/app_backdrop/app_backdrop.component';
import {CustomDualistboxComponent} from './custom-components/custom-dualistbox/custom-dualistbox.component';
import {SafeHtmlPipe} from './custom-components/custom-dualistbox/safe-html.pipe';
import {GAGuard} from './ga/GA.guard';
import {AgePipe} from './pipes/age.pipe';
import {GroupByPipe} from './pipes/groupby.pipe';
import {JiraAgePipe} from './pipes/jira-age.pipe';
import {KeysPipe} from './pipes/keys.pipe';
import {TimeConvertPipe} from './pipes/time-convert.pipe';


const MY_DATE_FORMATS = {
    parse: {
        dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        monthYearLabel: {year: 'numeric', month: 'short'},
        dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
        monthYearA11yLabel: {year: 'numeric', month: 'long'},
    }
};


@NgModule({
    imports: [
        AccordionModule.forRoot(),
        AgmCoreModule,
        AlertModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        CommonModule,
        FormsModule,
        MalihuScrollbarModule.forRoot(),
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule,
        MatRippleModule,
        MatSidenavModule,
        MatStepperModule,
        MatTabsModule,
        MatTooltipModule,
        ModalModule.forRoot(),
        NgSelectModule,
        NgxSelectModule,
        NgxPermissionsModule.forRoot(),
        PopoverModule.forRoot(),
        ReactiveFormsModule,
        TabsModule.forRoot(),
        TextMaskModule
    ],
    declarations: [
        AppBackdropComponent,
        CustomDualistboxComponent,
        FooterComponent,
        FooterComponent,
        GroupByPipe,
        AgePipe,
        KeysPipe,
        JiraAgePipe,
        SafeHtmlPipe,
        TimeConvertPipe,
    ],
    exports: [
        AccordionModule,
        AgmCoreModule,
        AlertModule,
        AngularDualListBoxModule,
        AppBackdropComponent,
        BsDropdownModule,
        CollapseModule,
        CommonModule,
        CustomDualistboxComponent,
        FormsModule,
        GroupByPipe,
        KeysPipe,
        MalihuScrollbarModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatOptionModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        ModalModule,
        NgSelectModule,
        NgxSelectModule,
        NgxDatatableModule,
        NgxPermissionsModule,
        PasswordStrengthBarModule,
        PopoverModule,
        ReactiveFormsModule,
        SafeHtmlPipe,
        TabsModule,
        TextMaskModule,
        TimeConvertPipe,
        AgePipe,
        JiraAgePipe,
    ],
    providers: [
        ArchiveService,
        DatatableService,
        InputMasks,
        RegexPatterns,
        ToastrHelperService,
        DateHelper,
        GAGuard,
        {provide: DateAdapter, useClass: MyDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
