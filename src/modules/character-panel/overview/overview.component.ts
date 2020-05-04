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
    loading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private account: AccountService
    ) { }

    ngOnInit() {
        // TODO: Implement Character resolver
        return this.route.params.subscribe((params: { name: string }) => {
            this.getCharacterDetails(params.name);
        });
    }

    getImg(Item: DecodedItem) {
        const group = Item.group.toString(16).padStart(2, '0');
        const id = Item.id.toString(16).padStart(2, '0');
        const image = `00${group}${id}00`.toUpperCase();
        console.log(Item.slot);

        return `/assets/items/${image}.png`;
    }

    private getCharacterDetails(name: string) {
        return this.account.getCharacter(name)
            .pipe(map(this.putWingsInfront))
            .subscribe((data: CharacterData) => {
                this.Character = data;
                this.loading = false;
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
