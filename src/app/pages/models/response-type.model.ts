import {Deserializable} from '../../shared/models/deserializable.model';

export class ResponseType implements Deserializable {
    id: number;
    name: string;
    code: number;

    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}