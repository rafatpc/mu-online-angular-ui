import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pads zeros infront of a value
 * Usage:
 *   value | PadZeros:count
 * Example:
 *   {{ 50 | PadZeros:5 }}
 *   formats to: 00050
*/
@Pipe({ name: 'PadZeros' })
export class PadZerosPipe implements PipeTransform {
    transform(value: any, count: number = 3): string {
        return String(value).padStart(count, '0');
    }
}
