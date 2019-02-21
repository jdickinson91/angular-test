import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation,} from '@angular/core';
import {CountryService} from '../services/country.service';
import {ResponseTypeService} from '../services/response-type.service';
import {WebRequestService} from '../services/web-request.service';
import {WebRequest} from '../models/web-request.model';
import {TotalStats} from '../models/total-stats.model';
import {Subscription} from "rxjs";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {ChartModel} from "../models/chart.model";
import {MatSidenav} from "@angular/material";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboards.component.html',
    styleUrls: ['./dashboards.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DashboardsComponent implements OnInit, OnDestroy {

    @ViewChild('table') table: DatatableComponent;
    @ViewChild('filterSideNav') sidenav: MatSidenav;

    headerHeight = 50;
    footerHeight = 60;
    rowHeight = 40;
    columnMode = 'force';

    webRequests: WebRequest[] = [];
    totalStats: TotalStats;
    requestByCountry: ChartModel[] = [];

    sortCol = 'id';
    sortDir = 'asc';
    limit = 10;
    responseTypeId = 0;
    countryId = 0;

    loading = false;

    scrollSubscription$: Subscription;

    constructor(private countryService: CountryService,
                private responseTypeService: ResponseTypeService,
                private webRequestService: WebRequestService,
                private el: ElementRef) {
    }

    ngOnInit() {

        this.getData(this.limit, this.webRequests.length);
        this.getTotalStats();
        this.getChartData();
        this.onScroll();
    }

    ngOnDestroy() {
        this.scrollSubscription$.unsubscribe();
    }

    getData(limit: number = 0, offset: number, sort: boolean = false) {

        this.loading = true;
        this.webRequestService.getWebRequestDatatable(
            offset.toString(),
            limit.toString(),
            this.sortCol,
            this.sortDir,
            this.responseTypeId.toString(),
            this.countryId.toString()
        ).subscribe(webRequests => {
            if (webRequests) {
                if (sort) {
                    this.webRequests = webRequests;
                } else {
                    this.webRequests = [...this.webRequests, ...webRequests];
                }
            }
            this.loading = false;
        });
    }

    private getTotalStats() {
        this.webRequestService.getTotalStats(this.responseTypeId.toString(), this.countryId.toString()).subscribe(stats => this.totalStats = stats);
    }

    private getChartData() {
        this.webRequestService.getRequestByCountry(this.responseTypeId.toString(), this.countryId.toString()).subscribe(stats => this.requestByCountry = stats);
    }

    onScroll() {
        this.scrollSubscription$ = this.table.scroll.debounceTime(150).subscribe(data => {
            const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;

            if (!this.loading && data.offsetY + viewHeight >= this.webRequests.length * this.rowHeight) {
                let limit = this.limit;

                if (this.webRequests.length === 0) {
                    const pageSize = Math.ceil(viewHeight / this.rowHeight);
                    limit = Math.max(pageSize, this.limit);
                }

                this.getData(limit, this.webRequests.length)
            }
        })
    }

    onSort(event) {

        const sort = event.sorts[0];
        this.sortCol = sort.prop;
        this.sortDir = sort.dir;

        this.getData(this.limit, 0, true)
    }

    setRowClass(row) {
        return {
            'color-red': row.response_type.code === 500
        }
    }

    toggleSideNav() {
        this.sidenav.open();
    }

    onApply(event) {

        this.countryId = event.country_id || "0";
        this.responseTypeId = event.response_type_id || "0";

        this.getTotalStats();
        this.getChartData();
        this.getData(this.limit, 0, true);
    }
}
