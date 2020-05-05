import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { AccountService } from 'src/modules/account/account.service';
import { CharacterData } from 'src/modules/character/character.types';
import { DecodedItem } from 'src/modules/items/items.types';

@Component({
    templateUrl: './overview.component.html'
})
export class OverviewComponent {
    Character: CharacterData = {} as any;

    constructor(
        private route: ActivatedRoute,
        private account: AccountService
    ) { }

    ngOnInit() {
        this.route.data
            .pipe(map(data => data.character))
            .pipe(map(this.putWingsInfront))
            .subscribe(data => {
                this.Character = data;
            });
    }

    // TODO: Export? Is it going to be needed somewhere else?
    private putWingsInfront(data: CharacterData): CharacterData {
        const wingsIndex = data.Inventory.Equipped.findIndex(Item => Item.slot === 7);

        if (wingsIndex === -1) {
            return data;
        }

        const wings = data.Inventory.Equipped[wingsIndex];

        data.Inventory.Equipped.splice(wingsIndex, 1);
        data.Inventory.Equipped.unshift(wings);

        return data;
    }
}
