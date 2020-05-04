import { Pipe, PipeTransform } from '@angular/core';
import { DecodedItem, ItemConfig } from './items.types';
import { ItemsService } from './items.service';

// Get Item name from Item object
@Pipe({ name: 'ItemName' })
export class ItemNamePipe implements PipeTransform {
    constructor(
        private itemsService: ItemsService
    ) { }

    transform(Item: DecodedItem): string {
        const { group, id, level, ancient } = Item;

        const item: ItemConfig[] = this.itemsService.find(group, id) || [];

        if (item.length === 0) {
            return '';
        }

        if (item.length > 1) {
            const found = item.filter(Item => Item.Level === level)[0];
            return found?.Name;
        }

        const name = (item && item[0].Name) || '';

        if (ancient === 5) {
            const set = item[0].Ancient[0];
            return `${set} ${name}`;

        } else if (ancient === 10) {
            const set = item[0].Ancient[1];
            return `${set} ${name}`;
        }

        return name;
    }
}
