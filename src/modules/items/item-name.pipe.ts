import { Pipe, PipeTransform } from '@angular/core';
import { DecodedItem } from './items.types';
import { ItemsService } from './items.service';

// Get Item name from Item object
@Pipe({ name: 'ItemName' })
export class ItemNamePipe implements PipeTransform {
    constructor(
        private itemsService: ItemsService
    ) { }

    transform(Item: DecodedItem): string {
        const { ancient } = Item;
        const { Name, Ancient } = this.itemsService.getConfig(Item) || {};

        if (!Name) {
            return '';
        }

        if (ancient > 0) {
            const set = ancient === 5 ? Ancient[0] : Ancient[1];
            return `${set} ${Name}`;
        }

        return Name;
    }
}
