import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AccountCharacters } from '../character/character.types';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class AccountCharactersResolver implements Resolve<AccountCharacters> {
    constructor(
        private accountService: AccountService
    ) { }

    resolve(): Observable<AccountCharacters> | Promise<AccountCharacters> | AccountCharacters {
        return this.accountService.getCharacters();
    }
}
