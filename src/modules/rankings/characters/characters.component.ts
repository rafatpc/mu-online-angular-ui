import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CharacterClass, CharacterData } from '@type/character.types';
import { ClassDecode, PkStatusDecode } from '@helpers/character.helpers';
import { MapDecode } from '@helpers/map.helpers';

import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
    characters: Array<CharacterData> = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        return this.http.get<any>(`${environment.apiUrl}/rankings/characters`)
            .pipe(map(this.transformCharactersData.bind(this)))
            .subscribe((data: CharacterData[]) => {
                this.characters = data;
            });
    }

    private transformCharactersData(characters: Array<any>): CharacterData[] {
        return characters.map(this.transformCharacterData);
    }

    private transformCharacterData(Character: CharacterData): CharacterData {
        const ClassData: CharacterClass = ClassDecode[Character.Class] || ClassDecode.Undefined;
        const padZeros = value => String(value).padStart(3, '0');

        return {
            ...Character,
            ...ClassData,
            Map: MapDecode[Character.MapNumber],
            PkName: PkStatusDecode[Character.PkLevel],
            cLevel: padZeros(Character.cLevel),
            Resets: padZeros(Character.Resets),
            GrandResets: padZeros(Character.GrandResets)
        }
    }
}
