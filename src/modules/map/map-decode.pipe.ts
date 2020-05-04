import { Pipe, PipeTransform } from '@angular/core';
import { MapName } from '../character/character.types';
import { MapDecode } from './map.helpers';

// Transforms map number to name
@Pipe({ name: 'MapName' })
export class MapNamePipe implements PipeTransform {
    transform(MapNumber: number): MapName {
        return MapDecode[MapNumber] || MapDecode.Undefined;
    }
}
