import { Component, Input, HostBinding, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DecodedItem, ItemConfig } from '../items.types';
import { ItemsService } from '../items.service';

@Component({
    selector: 'xweb-item-info',
    templateUrl: './item-info.component.html'
})
export class ItemInfoComponent implements OnInit {
    @Input('item') Item: DecodedItem;
    @Input('tooltip-location') tooltipLocation: string = 'top';
    @HostBinding('class.wings') Wings: boolean = false;

    ItemConfig: ItemConfig;

    constructor(
        private itemsService: ItemsService
    ) { }

    ngOnInit() {
        this.Wings = this.Item.slot === 7;
        this.getItemConfig();
    }

    // TODO: That should be exported to the ItemsService!
    private getItemConfig() {
        const { group, id, level, ancient } = this.Item;
        const item = this.itemsService.find(group, id) || [];

        let itemConfig = item[0];

        if (item.length > 1) {
            const found = item.filter(Item => Item.Level === level)[0];

            if (found) {
                itemConfig = found;
            }
        }

        this.ItemConfig = itemConfig || {} as ItemConfig;
    }
}
