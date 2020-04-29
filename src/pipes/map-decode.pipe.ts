import { Pipe, PipeTransform } from '@angular/core';
import { MapDecode } from '@helpers/map.helpers';

// Transforms map number to name
@Pipe({ name: 'MapName' })
export class MapNamePipe implements PipeTransform {
    transform(MapNumber: number): string {
        return MapDecode[MapNumber] || MapDecode.Undefined;
    }
}
