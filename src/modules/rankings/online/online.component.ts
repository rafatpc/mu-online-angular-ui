import { Component, OnInit } from '@angular/core';

import { OnlineCharacter } from '../../character/character.types';
import { CharacterService } from '../../character/character.service';

@Component({
    templateUrl: './online.component.html'
})
export class OnlineComponent implements OnInit {
    characters: OnlineCharacter[] = [];
    loading: boolean = true;

    constructor(
        private characterService: CharacterService
    ) { }

    ngOnInit() {
        return this.characterService.getOnlineCharacters().subscribe((data: OnlineCharacter[]) => {
            this.characters = data;
            this.loading = false;
        });
    }
}
