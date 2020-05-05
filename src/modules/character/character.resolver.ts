import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CharacterService } from './character.service';
import { CharacterData } from './character.types';

@Injectable({
    providedIn: 'root'
})
export class CharacterResolver implements Resolve<CharacterData> {
    constructor(
        private characterService: CharacterService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<CharacterData> | Promise<CharacterData> | CharacterData {
        const { name } = route.params;
        return this.characterService.getCharacterDetails(name);
    }
}
