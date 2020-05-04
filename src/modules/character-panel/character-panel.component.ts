import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from 'src/modules/account/account.service';
import { CharacterData } from 'src/modules/character/character.types';

@Component({
    templateUrl: './character-panel.component.html'
})
export class CharacterPanelComponent implements OnInit {
    Character: CharacterData = {} as any;
    loading: boolean = true;

    navigation = [
        { quick: 1, path: 'reset', name: 'Reset', icon: 'fas fa-sync-alt' },
        { quick: 2, path: 'grand-reset', name: 'Grand Reset', icon: 'fas fa-sync-alt' },
        { path: 'add-stats', name: 'Add Stats', icon: 'fas fa-plus' },
        { quick: 3, path: 'swap-stats', name: 'Swap Stats', icon: 'fas fa-exchange-alt' },
        { quick: 4, path: 'clear-pk', name: 'Clear PK', icon: 'fas fa-sync-alt' },
        { path: 'clear-inventory', name: 'Clear Inventory', icon: 'fas fa-sync-alt' },
    ];

    quick = [];

    constructor(
        private route: ActivatedRoute,
        private account: AccountService
    ) { }

    ngOnInit() {
        return this.route.params.subscribe((params: { name: string }) => {
            this.getCharacterDetails(params.name);

            this.quick = this.navigation
                .filter(route => route.quick > 0)
                .sort((a, b) => a > b ? -1 : 1);
        });
    }

    private getCharacterDetails(name: string) {
        return this.account.getCharacter(name).subscribe((data: CharacterData) => {
            this.Character = data;
            this.loading = false;
        });
    }
}
