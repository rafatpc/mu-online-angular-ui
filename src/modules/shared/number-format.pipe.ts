import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'NumberFormat' })
export class NumberFormatPipe implements PipeTransform {
    transform(number: number): string {
        return new Intl.NumberFormat().format(number);
    }
}
