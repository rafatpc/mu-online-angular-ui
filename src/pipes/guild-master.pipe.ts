import { Pipe, PipeTransform } from '@angular/core';
import { GuildPositionDecode } from '@helpers/guild.helpers';
import { GuildMember } from '@type/guild.types';

// Transforms guild position level to position name
@Pipe({ name: 'GuildMaster' })
export class GuildMasterPipe implements PipeTransform {
    transform(Members: GuildMember[]): GuildMember {
        return Members.filter(Member => Member.G_Level === GuildPositionDecode.GuildMaster.Level)[0];
    }
}
