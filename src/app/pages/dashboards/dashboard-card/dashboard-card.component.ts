import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrls: ['./dashboard-card.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DashboardCardComponent implements OnInit {

    @Input() title = '';
    @Input() filtered = 0;
    @Input() unfiltered = 0;

    constructor () {}
    ngOnInit () {}

}
