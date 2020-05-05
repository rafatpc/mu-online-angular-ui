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
    HasSocket: boolean;

    constructor(
        private itemsService: ItemsService
    ) { }

    ngOnInit() {
        this.Wings = this.Item.slot === 7;
        this.ItemConfig = this.itemsService.getConfig(this.Item);
        this.HasSocket = this.Item.sockets.some(option => {
            console.log(option);

            return option !== null;
        });
    }
}
