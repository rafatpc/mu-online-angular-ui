import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { MapDecode } from '@helpers/map.helpers';
import { PkStatusDecode, ClassDecode } from '@helpers/character.helpers';
import { CharacterData, CharacterClass } from '@type/character.types';

@Injectable({ providedIn: 'root' })
export class CharacterService {
    constructor(
        private http: HttpClient
    ) {
    }

    getCharacterDetails(name: string): Observable<CharacterData> {
        return this.http.get<CharacterData>(`${environment.apiUrl}/character/${name}/extended`)
            .pipe(map(this.transformCharacterData.bind(this)));
    }

    getRankings(): Observable<CharacterData[]> {
        return this.http.get<CharacterData>(`${environment.apiUrl}/rankings/characters`)
            .pipe(map(this.transformCharactersData.bind(this)));
    }

    private transformCharactersData(characters: Array<any>): CharacterData[] {
        return characters.map(this.transformCharacterData.bind(this));
    }

    private transformCharacterData(Character: CharacterData): CharacterData {
        const ClassData: CharacterClass = ClassDecode[Character.Class] || ClassDecode.Undefined;

        return {
            ...Character,
            ...ClassData,
            Map: MapDecode[Character.MapNumber],
            PkName: PkStatusDecode[Character.PkLevel]
        }
    }
}
