import { Pipe, PipeTransform } from '@angular/core';
import { DecodedItem } from './items.types';
import { ItemsService } from './items.service';

// Get Item image from Item object
@Pipe({ name: 'ItemImage' })
export class ItemImagePipe implements PipeTransform {
    constructor(
        private itemsService: ItemsService
    ) { }

    transform(Item: DecodedItem): string {
        const { group, id, level, ancient } = Item;
        const item = this.itemsService.find(group, id);

        const type = 0; // Legacy
        const levelItem = item?.length > 1 ? level : 0;

        // Item image: <<Item type>><<Group>><<Id>><<Level>>.png
        const image = [type, group, id, levelItem]
            .map(this.encodeSegment)
            .join('');

        return `/assets/items/${image}.png`;
    }

    private encodeSegment(value: number) {
        return value.toString(16).padStart(2, '0').toUpperCase();
    }
}
