import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { DecodedItem } from './items.types';

// Get Item image from Item object
@Pipe({ name: 'ItemTypeClass' })
export class ItemTypeClassPipe implements PipeTransform {
    constructor(
        private itemsService: ItemsService
    ) { }

    transform(Item: DecodedItem): string {
        const { excellent, level, ancient, group } = Item;
        const { Slot, Socket } = this.itemsService.getConfig(Item) || {};

        const canBeExcellent = Slot >= 0 && Slot !== 7;
        const isExcellent = this.hasExcellentOption(excellent) && canBeExcellent;
        const isSocket = Socket === true;
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

    private hasExcellentOption(excellent: boolean[]) {
        return excellent.some(option => option);
    }
}
