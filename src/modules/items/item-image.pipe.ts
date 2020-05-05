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
        const { Level, Type, Id } = this.itemsService.getConfig(Item) || {};

        const ancient = 0; // Legacy
        const levelItem = Level > 0 ? Item.level : 0;

        // Item image: <<Ancient>><<Group>><<Id>><<Level>>.png
        const image = [ancient, Type, Id, levelItem]
            .map(this.encodeSegment)
            .join('');

        return `/assets/items/${image}.png`;
    }

    private encodeSegment(value: number) {
        return value.toString(16).padStart(2, '0').toUpperCase();
    }
}
