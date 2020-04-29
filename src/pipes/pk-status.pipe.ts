import { Pipe, PipeTransform } from '@angular/core';
import { PkStatusDecode } from '@helpers/character.helpers';

// Transforms map number to name
@Pipe({ name: 'PkStatusName' })
export class PkStatusPipe implements PipeTransform {
    transform(PkLevel: number): string {
        return PkStatusDecode[PkLevel] || PkStatusDecode[3];
    }
}
