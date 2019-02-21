import {Deserializable} from '../../shared/models/deserializable.model';

export class Country implements Deserializable {
    id: number;
    name: string;

    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}