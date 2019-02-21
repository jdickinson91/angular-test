import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ResponseType} from '../models/response-type.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ResponseTypeService {

    constructor(private httpClient: HttpClient){}

    getResponseTypes(){
        return this.httpClient.get<ResponseType[]>(environment.base_url + '/response-types')
            .map((response_types: ResponseType[]) => response_types.map((response_type: ResponseType) => new ResponseType().deserialize(response_type)));
    }
}
