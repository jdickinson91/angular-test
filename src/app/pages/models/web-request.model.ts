import {Deserializable} from '../../shared/models/deserializable.model';
import {Country} from './country.model';
import {ResponseType} from './response-type.model';

export class WebRequest implements Deserializable {
    id: number;
    response_type_id: number;
    country_id: number;
    ip: string;
    response_time: number;
    path: string;

    response_type: ResponseType;
    country: Country;

    get getResponseType(): ResponseType {
        return new ResponseType().deserialize(this.response_type);
    }

    get getCountry(): Country {
        return new Country().deserialize(this.country);
    }

    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}