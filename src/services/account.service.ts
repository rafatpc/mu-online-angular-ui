import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { AccountCharacters, CharacterData } from '@type/character.types';

@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(
        private http: HttpClient
    ) { }

    getCharacters(): Observable<AccountCharacters> {
        return this.http.get<AccountCharacters>(`${environment.apiUrl}/account/characters`);
    }

    getCharacter(name: string): Observable<CharacterData> {
        return this.http.get<CharacterData>(`${environment.apiUrl}/account/character/${name}`);
    }
}
