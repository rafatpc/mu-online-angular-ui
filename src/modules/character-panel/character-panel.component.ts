import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterData } from '../character/character.types';

@Component({
    templateUrl: './character-panel.component.html'
})
export class CharacterPanelComponent implements OnInit {
    Character: CharacterData = {} as any;

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
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.Character = data.character;
            this.quick = this.navigation
                .filter(route => route.quick > 0)
                .sort((a, b) => a > b ? -1 : 1);
        });
    }
}
