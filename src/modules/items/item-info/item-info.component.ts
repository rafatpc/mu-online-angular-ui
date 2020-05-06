import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { DecodedItem, ItemConfig, ItemData } from '../items.types';
import { ItemsService } from '../items.service';
import { ItemDataConfig } from '../item.data';

@Component({
    selector: 'xweb-item-info',
    templateUrl: './item-info.component.html'
})
export class ItemInfoComponent implements OnInit {
    @Input('item') Item: DecodedItem;
    @Input('tooltip-location') tooltipLocation: string = 'top';
    @HostBinding('class.wings') Wings: boolean = false;

    ItemConfig: ItemConfig;
    ItemData: ItemData;
    HasExcellent: boolean;
    HasSocket: boolean;
    Option: string;
    OptionPercentage: boolean;

    constructor(
        private itemsService: ItemsService
    ) { }

    ngOnInit() {
        this.Wings = this.Item.slot === 7;
        this.ItemConfig = this.itemsService.getConfig(this.Item);
        this.ItemData = ItemDataConfig[this.ItemConfig.Slot];

        if (this.ItemConfig.Slot === -1) {
            return;
        }

        this.HasSocket = this.Item.sockets.some(option => option !== null);

        // Deal with Wings specific things...
        this.HasExcellent = this.Item.excellent.some((option, index) => {
            if (this.Wings && index === 5) {
                return false;
            }

            return option;
        });

        if (this.Wings) {
            if (this.Item.excellent[5]) {
                this.Option = this.ItemData.Option[1];
                this.OptionPercentage = true;
            } else {
                this.Option = this.ItemData.Option[0];
                this.OptionPercentage = false;
            }
        } else if (this.ItemData.Option) {
            this.Option = this.ItemData.Option[0];
            this.OptionPercentage = this.ItemData.OptionPercentage;
        }
    }
}
