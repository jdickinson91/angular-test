import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardsComponent} from './dashboards.component';
import {SharedModule} from '../../shared/shared.module';
import {DashboardCardComponent} from "./dashboard-card/dashboard-card.component";
import {BarChartComponent} from "./charts/bar-chart/bar-chart.component";
import {DonutChartComponent} from "./charts/donut-chart/donut-chart.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CountryService} from "../services/country.service";
import {ResponseTypeService} from "../services/response-type.service";
import {WebRequestService} from "../services/web-request.service";
import {FiltersComponent} from "./filters/filters.component";

const DASHBOARDS_ROUTE = [
    {path: '', component: DashboardsComponent},
];

@NgModule({
    declarations: [DashboardsComponent, DashboardCardComponent, BarChartComponent, DonutChartComponent, FiltersComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(DASHBOARDS_ROUTE),
        NgxChartsModule
    ],
    providers: [CountryService, ResponseTypeService, WebRequestService]

})
export class DashboardsModule {
}
