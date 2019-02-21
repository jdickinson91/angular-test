import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class CountryService {

    constructor(private httpClient: HttpClient){}

    getCountries(){
        return this.httpClient.get<Country[]>(environment.base_url + '/countries')
            .map((countries: Country[]) => countries.map((country: Country) => new Country().deserialize(country)));
    }
}
