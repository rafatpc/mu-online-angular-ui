import { Pipe, PipeTransform } from '@angular/core';
import { GuildPositionDecode } from './guild.helpers';
import { GuildPosition } from './guild.types';

// Transforms guild position level to position name
@Pipe({ name: 'GuildPosition' })
export class GuildPositionPipe implements PipeTransform {
    transform(G_Status: number): string {
        const GuildPosition: GuildPosition = GuildPositionDecode[G_Status];

        if (!GuildPosition) {
            return GuildPositionDecode.Normal.Name;
        }

        return GuildPosition.Name;
    }
}
