import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DonutChartComponent implements OnInit {

    @Input() title = '';
    @Input('width') width;
    @Input('height') height;
    @Input() color_scheme = [];
    @Input() data = [];

    view: any[];



    constructor () {
    }

    ngOnInit () {
        this.view = [this.width, this.height];

    }

}
