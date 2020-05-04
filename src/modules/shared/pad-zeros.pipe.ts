import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'PadZeros' })
export class PadZerosPipe implements PipeTransform {
    transform(value: any, count: number = 3): string {
        return String(value).padStart(count, '0');
    }
}
