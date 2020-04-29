import { Pipe, PipeTransform } from '@angular/core';
import { PkStatusDecode } from '@helpers/character.helpers';
import { PkStatusName } from '@type/character.types';

// Transforms PK level to PK status name
@Pipe({ name: 'PkStatusName' })
export class PkStatusPipe implements PipeTransform {
    transform(PkLevel: number): PkStatusName {
        return PkStatusDecode[PkLevel] || PkStatusDecode[3];
    }
}
