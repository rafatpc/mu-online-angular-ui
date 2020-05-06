import { Pipe, PipeTransform } from '@angular/core';
import { SocketOption } from './items.types';
import { ItemsService } from './items.service';

@Pipe({ name: 'ItemSocketOption' })
export class ItemSocketOptionPipe implements PipeTransform {
    constructor(private itemsService: ItemsService) { }

    transform(Socket: SocketOption): string {
        const { type, level } = Socket;

        if (type === null) {
            return 'No item application';
        }

        const SocketConfig = this.itemsService.getSocket(type);
        const Level = (level + 1) > 5 ? 5 : (level + 1);
        const Value = SocketConfig['Level' + Level];

        let Option = `${SocketConfig.Name} +${Value}`;

        if (SocketConfig.Name.match(/%$/)) {
            Option = SocketConfig.Name.replace(/(.*)%$/, `$1 +${Value}%`);
        }

        return this.getSocketTypeName(SocketConfig.Type, Option);
    }

    private getSocketTypeName(Type, Socket) {
        switch (Type) {
            case 1:
                return `Fire(${Socket})`;
            case 2:
                return `Water(${Socket})`;
            case 3:
                return `Ice(${Socket})`;
            case 4:
                return `Wind(${Socket})`;
            case 5:
                return `Lighting(${Socket})`;
            case 6:
                return `Earth(${Socket})`;
        }

        return Socket;
    }
}
