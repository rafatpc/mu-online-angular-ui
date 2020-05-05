import { Pipe, PipeTransform, Input } from '@angular/core';
import { DecodedItem } from './items.types';
import { ExcellentOptionsMap } from './excellent-options.data';

@Pipe({ name: 'ItemExcellentOption' })
export class ItemExcellentOptionPipe implements PipeTransform {
    transform(Item: DecodedItem, OptionIndex: number): string {
        const { group } = Item;

        let OptionsMap = [];

        if (group <= 5) {
            OptionsMap = ExcellentOptionsMap[1];
        } else if (group >= 6 && group <= 11) {
            OptionsMap = ExcellentOptionsMap[2];
        } else if (group === 12) {
            OptionsMap = ExcellentOptionsMap[3];
        } else if (group === 13) {
            OptionsMap = ExcellentOptionsMap[2];
        }

        return Item.excellent[OptionIndex] ? OptionsMap[OptionIndex] : ''
    }
}
