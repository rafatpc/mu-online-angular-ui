import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as humanizeTime from 'pretty-ms';

import { CharacterClass, CharacterData, OnlineCharacter } from '@type/character.types';
import { ClassDecode, PkStatusDecode } from '@helpers/character.helpers';
import { MapDecode } from '@helpers/map.helpers';

import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GuildMember } from '@type/guild.types';
import { from } from 'rxjs';

@Component({
    templateUrl: './online.component.html'
})
export class OnlineComponent implements OnInit {
    characters: Array<OnlineCharacter> = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        return this.http.get<any>(`${environment.apiUrl}/rankings/online`)
            .pipe(map(this.transformCharactersData.bind(this)))
            .subscribe((data: OnlineCharacter[]) => {
                this.characters = data;
            });
    }

    private transformCharactersData(characters: Array<any>): OnlineCharacter[] {
        return characters.map(this.transformCharacterData);
    }

    private transformCharacterData(Data: OnlineCharacter) {
        const Character: Partial<CharacterData> = Data.Character;
        const ClassData: CharacterClass = ClassDecode[Character.Class] || ClassDecode.Undefined;
        const PadZeros = value => String(value).padStart(3, '0');

        const CurrentTime: number = (new Date()).getTime();
        const ConnectedTime: number = (new Date(Data.ConnectTM)).getTime();
        const OnlineSinceSeconds: number = CurrentTime - ConnectedTime;
        const OnlineSince: string = humanizeTime(OnlineSinceSeconds, { unitCount: 2, secondsDecimalDigits: 0 });

        return {
            ...Data,
            OnlineSince,
            Character: {
                ...Character,
                ...ClassData,
                PkName: PkStatusDecode[Character.PkLevel],
                Map: MapDecode[Character.MapNumber],
                cLevel: PadZeros(Character.cLevel),
                Resets: PadZeros(Character.Resets),
                GrandResets: PadZeros(Character.GrandResets)
            }
        }
    }
}
