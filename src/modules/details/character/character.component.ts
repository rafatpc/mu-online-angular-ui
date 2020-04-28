import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterData } from '@type/character.types';
import { CharacterService } from '@services/character.service';

@Component({
    templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
    loading: boolean = true;
    Character: CharacterData = {} as CharacterData;

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        return this.route.params.subscribe((params: { name: string }) => {
            this.getCharacterData(params.name);
        });
    }

    private getCharacterData(name: string) {
        return this.characterService.getCharacterDetails(name).subscribe((data: CharacterData) => {
            this.Character = data;
            this.loading = false;
        });
    }
}