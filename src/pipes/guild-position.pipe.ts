import { Pipe, PipeTransform } from '@angular/core';
import { GuildPositionDecode } from '@helpers/guild.helpers';
import { GuildPosition } from '@type/guild.types';

// Transforms guild position level to position name
@Pipe({ name: 'GuildPosition' })
export class GuildPositionPipe implements PipeTransform {
    transform(G_Level: number): string {
        const GuildPosition: GuildPosition = GuildPositionDecode[G_Level];

        if (!GuildPosition) {
            return GuildPositionDecode.Normal.Name;
        }

        return GuildPosition.Name;
    }
}
