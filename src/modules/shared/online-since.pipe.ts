import { Pipe, PipeTransform } from '@angular/core';
import * as humanizeTime from 'pretty-ms';

// Transforms ConnectTM JSON time to online since duration
@Pipe({ name: 'OnlineSince' })
export class OnlineSincePipe implements PipeTransform {
    transform(ConnectTM: string): string {
        const CurrentTime: number = (new Date()).getTime();
        const ConnectedTime: number = (new Date(ConnectTM)).getTime();
        const OnlineSinceSeconds: number = CurrentTime - ConnectedTime;

        return humanizeTime(OnlineSinceSeconds, { unitCount: 2, secondsDecimalDigits: 0 });
    }
}
