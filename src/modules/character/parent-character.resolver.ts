import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CharacterData } from './character.types';

@Injectable({ providedIn: 'root' })
export class ParentCharacterResolver implements Resolve<CharacterData> {
    resolve(route: ActivatedRouteSnapshot): Observable<CharacterData> | Promise<CharacterData> | CharacterData {
        const { character } = route.parent.data;
        return character;
    }
}
