import { Pipe, PipeTransform } from '@angular/core';
import { DecodedItem } from '@type/items.types';
import { ItemsService } from '@services/items.service';

// Get Item name from Item object
@Pipe({ name: 'ItemName' })
export class ItemNamePipe implements PipeTransform {
    constructor(
        private itemsService: ItemsService
    ) { }

    transform(Item: DecodedItem): string {
        const { group, id, level, ancient } = Item;
        const item = this.itemsService.find(group, id);

        if (item.length > 1) {
            const found = item.filter(Item => Item.Level === level)[0];
            return found?.Name;
        }

        return item[0].Name;
    }

    private encodeSegment(value: number) {
        return value.toString(16).padStart(2, '0').toUpperCase();
    }
}
