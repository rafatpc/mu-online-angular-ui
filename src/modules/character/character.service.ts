import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CharacterData, OnlineCharacter } from './character.types';

@Injectable({ providedIn: 'root' })
export class CharacterService {
    constructor(
        private http: HttpClient
    ) {
    }

    getCharacterDetails(name: string): Observable<CharacterData> {
        return this.http.get<CharacterData>(`${environment.apiUrl}/character/${name}/extended`);
    }

    getOnlineCharacters() {
        return this.http.get<OnlineCharacter[]>(`${environment.apiUrl}/rankings/online`);
    }

    getRankings(): Observable<CharacterData[]> {
        return this.http.get<CharacterData[]>(`${environment.apiUrl}/rankings/characters`);
    }
}
