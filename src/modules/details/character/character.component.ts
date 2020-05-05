import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterData } from '../../character/character.types';

@Component({
    templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
    Character: CharacterData = {} as CharacterData;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(({ character }) => {
            this.Character = character;
        });
    }
}
