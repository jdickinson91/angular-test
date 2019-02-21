import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class BarChartComponent implements OnInit {

    @Input() title = '';
    @Input('width') width;
    @Input('height') height;
    @Input() x_axis = '';
    @Input() y_axis = '';
    @Input() color_scheme = [];
    @Input() data = [];

    view: any[];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    showYAxisLabel = true;

    constructor() {
    }

    ngOnInit() {
        this.view = [this.width, this.height];
    }

}
