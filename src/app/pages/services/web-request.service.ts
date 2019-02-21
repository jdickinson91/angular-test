import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WebRequest} from '../models/web-request.model';
import {environment} from '../../../environments/environment';
import {TotalStats} from '../models/total-stats.model';
import {ChartModel} from "../models/chart.model";

@Injectable()
export class WebRequestService {

    /**
     * @param httpClient
     */
    constructor(private httpClient: HttpClient) {
    }

    /**
     *
     * @param offset
     * @param limit
     * @param sort_col
     * @param sort_dir
     * @param response_type_id
     * @param country_id
     */
    getWebRequestDatatable(offset: string, limit: string, sort_col: string, sort_dir: string, response_type_id: string, country_id) {

        response_type_id = response_type_id === '0' ? '' : response_type_id;
        country_id = country_id === '0' ? '' : country_id;

        const httpOptions = {
            params: {
                'offset': offset,
                'limit': limit,
                'sort_col': sort_col,
                'sort_dir': sort_dir,
                'response_type_id': response_type_id,
                'country_id': country_id
            }
        };
        return this.httpClient.get<WebRequest[]>(environment.base_url + '/web-requests/datatable', httpOptions)
            .map((web_requests: WebRequest[]) => web_requests.map((web_request: WebRequest) => new WebRequest().deserialize(web_request)));
    }

    /**
     * @param response_type_id
     * @param country_id
     */
    getTotalStats(response_type_id: string, country_id: string) {

        response_type_id = response_type_id === '0' ? '' : response_type_id;
        country_id = country_id === '0' ? '' : country_id;

        const httpOptions = {
            params: {
                response_type_id: response_type_id,
                country_id: country_id
            }
        };

        return this.httpClient.get<TotalStats>(environment.base_url + '/web-requests/total-stats', httpOptions);
    }

    getRequestByCountry(response_type_id: string, country_id: string){

        response_type_id = response_type_id === '0' ? '' : response_type_id;
        country_id = country_id === '0' ? '' : country_id;

        const httpOptions = {
            params: {
                response_type_id: response_type_id,
                country_id: country_id
            }
        };

        return this.httpClient.get<ChartModel[]>(environment.base_url + '/web-requests/requests-by-country', httpOptions);
    }
}
