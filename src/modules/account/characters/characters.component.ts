import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterData, AccountCharacters } from '../../character/character.types';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
    characters: Partial<CharacterData>[];

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            const Account: AccountCharacters = data.characters;
            this.characters = Account.Characters;
        });
    }
}
