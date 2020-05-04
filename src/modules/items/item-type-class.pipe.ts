import { Pipe, PipeTransform } from '@angular/core';
import { DecodedItem, SocketOption } from 'src/modules/items/items.types';

// Get Item image from Item object
@Pipe({ name: 'ItemTypeClass' })
export class ItemTypeClassPipe implements PipeTransform {
    transform(Item: DecodedItem): string {
        const { excellent, level, ancient, sockets, group } = Item;
        const isExcellent = this.hasExcellentOption(excellent) && group <= 11;
        const isSocket = this.hasSocketOption(sockets);
        const isExpensive = level >= 7;
        const isAncient = ancient > 0;

        if (isAncient) {
            return 'item-ancient';
        } else if (isSocket) {
            return 'item-socket';
        } else if (isExcellent) {
            return 'item-excellent';
        } else if (isExpensive) {
            return 'item-expensive';
        }

        return 'item-normal';
    }

    private hasSocketOption(sockets: SocketOption[]) {
        return sockets.some(option => {
            return option !== null && option.type !== null;
        });
    }

    private hasExcellentOption(excellent: boolean[]) {
        return excellent.some(option => option);
    }
}
