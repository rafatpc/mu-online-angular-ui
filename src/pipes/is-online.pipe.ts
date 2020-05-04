import { Pipe, PipeTransform } from '@angular/core';
import { CharacterData } from 'src/modules/character/character.types';

// Transforms Character's Online attribute to either xweb-status type or label (Online/Offline)
@Pipe({ name: 'IsOnline' })
export class IsOnlinePipe implements PipeTransform {
    transform(Character: CharacterData, label: boolean = false): string {
        const Status: string = Character && Character.Online ? 'Online' : 'Offline';

        if (!label) {
            return Status.toLowerCase();
        }

        return Status;
    }
}
