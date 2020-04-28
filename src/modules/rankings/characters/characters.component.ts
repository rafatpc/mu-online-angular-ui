import { Component, OnInit } from '@angular/core';

import { CharacterData } from '@type/character.types';
import { CharacterService } from '@services/character.service';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
    characters: Array<CharacterData> = [];

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        return this.characterService.getRankings().subscribe((data: CharacterData[]) => {
            this.characters = data;
        });
    }
}
