import { Pipe, PipeTransform, Input } from '@angular/core';
import { DecodedItem, SocketOption } from './items.types';
import { ItemsService } from './items.service';

@Pipe({ name: 'ItemSocketOption' })
export class ItemSocketOptionPipe implements PipeTransform {
    constructor(private itemsService: ItemsService) { }

    transform(Socket: SocketOption): string {
        const { type, level } = Socket;

        if (type === null) {
            return ''; // TODO: Empty?
        }

        const SocketConfig = this.itemsService.getSocket(type);
        const Value = SocketConfig['Level' + (level + 1)];

        if (SocketConfig.Name.match(/%$/)) {
            return SocketConfig.Name.replace(/(.*)%$/, `$1 +${Value}%`);
        }

        return `${SocketConfig.Name} +${Value}`;
    }
}
