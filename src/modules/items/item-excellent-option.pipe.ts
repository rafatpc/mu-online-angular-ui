import { Pipe, PipeTransform, Input } from '@angular/core';

import { ItemsService } from './items.service';
import { DecodedItem } from './items.types';
import { ItemDataConfig } from './item.data';

@Pipe({ name: 'ItemExcellentOption' })
export class ItemExcellentOptionPipe implements PipeTransform {
    constructor(
        private itemsService: ItemsService
    ) { }

    transform(Item: DecodedItem, OptionIndex: number): string {
        if (!Item.excellent[OptionIndex]) {
            return '';
        }

        const { Slot } = this.itemsService.getConfig(Item);
        const { ExcellentOptions } = ItemDataConfig[Slot];

        return ExcellentOptions[OptionIndex];
    }
}
