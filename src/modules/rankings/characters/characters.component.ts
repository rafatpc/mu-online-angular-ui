import { Component, OnInit } from '@angular/core';

import { CharacterData } from '../../character/character.types';
import { CharacterService } from '../../character/character.service';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
    characters: CharacterData[] = [];
    loading: boolean = true;

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        return this.characterService.getRankings().subscribe((data: CharacterData[]) => {
            this.characters = data;
            this.loading = false;
        });
    }
}
