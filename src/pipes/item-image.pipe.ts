import { Pipe, PipeTransform } from '@angular/core';
import { DecodedItem } from '@type/items.types';

// Get Item image from Item object
@Pipe({ name: 'ItemImage' })
export class ItemImagePipe implements PipeTransform {
    transform(Item: DecodedItem): string {
        // Item image: <<Unknown>><<Group>><<Id>><<Unknown>>.png
        const image = [0, Item.group, Item.id, 0]
            .map(this.encodeSegment)
            .join('');

        return `/assets/items/${image}.png`;
    }

    private encodeSegment(value: number) {
        return value.toString(16).padStart(2, '0').toUpperCase();
    }
}
