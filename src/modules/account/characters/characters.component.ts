import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { CharacterData } from '../../character/character.types';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
    characters: Partial<CharacterData>[];

    constructor(private account: AccountService) { }

    ngOnInit() {
        this.account.getCharacters().subscribe(Data => {
            this.characters = Data.Characters;
        });
    }
}
