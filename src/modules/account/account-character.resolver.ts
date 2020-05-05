import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CharacterData } from '../character/character.types';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class AccountCharacterResolver implements Resolve<CharacterData> {
    constructor(
        private accountService: AccountService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<CharacterData> | Promise<CharacterData> | CharacterData {
        const { name } = route.params;
        return this.accountService.getCharacter(name);
    }
}
