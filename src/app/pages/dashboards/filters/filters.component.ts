import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {CountryService} from "../../services/country.service";
import {ResponseTypeService} from "../../services/response-type.service";
import {Country} from "../../models/country.model";
import {ResponseType} from "../../models/response-type.model";

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FiltersComponent implements OnInit {

    countries: Country[] = [];
    responseTypes: ResponseType[] = [];

    countryId: number;
    responseTypeId: number;

    @Output() close = new EventEmitter<boolean>();
    @Output() apply = new EventEmitter<object>();

    constructor(private countryService: CountryService, private responseTypeService: ResponseTypeService) {
    }

    ngOnInit() {
        this.countryService.getCountries().subscribe(countries => this.countries = countries);
        this.responseTypeService.getResponseTypes().subscribe(responseTypes => this.responseTypes = responseTypes);
    }

    onClose() {
        this.close.next(true);
    }

    onApply() {
        this.apply.next({country_id: this.countryId, response_type_id: this.responseTypeId});
    }

    onReset() {
        this.countryId = null;
        this.responseTypeId = null;
        this.onApply();
    }
}