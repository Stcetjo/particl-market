import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';

// tslint:disable:variable-name
export class ProfileCreateRequest extends RequestBody {

    @IsNotEmpty()
    public name: string;

    public address: string;
}
// tslint:enable:variable-name
