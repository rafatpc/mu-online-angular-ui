import { Pipe, PipeTransform } from '@angular/core';
import { GuildPositionDecode } from './guild.helpers';
import { GuildMember } from './guild.types';

// Transforms guild position level to position name
@Pipe({ name: 'GuildMaster' })
export class GuildMasterPipe implements PipeTransform {
    transform(Members: GuildMember[]): GuildMember {
        return Members.filter(Member => Member.G_Status === GuildPositionDecode.GuildMaster.Level)[0];
    }
}
