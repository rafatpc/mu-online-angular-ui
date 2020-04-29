import { Pipe, PipeTransform } from '@angular/core';
import { MapDecode } from '@helpers/map.helpers';
import { MapName } from '@type/character.types';

// Transforms map number to name
@Pipe({ name: 'MapName' })
export class MapNamePipe implements PipeTransform {
    transform(MapNumber: number): MapName {
        return MapDecode[MapNumber] || MapDecode.Undefined;
    }
}
