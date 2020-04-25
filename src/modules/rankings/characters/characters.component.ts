import { Component } from '@angular/core';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent {
    characters: Array<CharacterData> = [
        { Name: 'RaFa', Online: true, Class: '/assets/classes/blade-master.jpg', Honor: 100, cLevel: 400, Resets: 78, GrandResets: 2, Map: 'Illusion Temple 6' },
        { Name: 'Rotterdam', Online: false, Class: '/assets/classes/soul-master.jpg', Honor: 230, cLevel: 400, Resets: 1, GrandResets: 2, Map: 'Lorencia' },
        { Name: 'Hardcore', Online: false, Class: '/assets/classes/dark-lord.jpg', Honor: 400, cLevel: 209, Resets: 50, GrandResets: 1, Map: 'Swamp of Calmness' }
    ];
}

type CharacterData = {
    Name: string;
    Online: boolean;
    Class: string;
    Honor: number;
    cLevel: number;
    Resets: number;
    GrandResets: number;
    Map: string
}
