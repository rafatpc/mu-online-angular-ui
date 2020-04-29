import { GuildPosition } from '@type/guild.types';

export abstract class GuildPositionDecode {
    static readonly Normal: GuildPosition = {
        Name: 'Normal',
        Level: 0
    };
    static readonly 0 = GuildPositionDecode.Normal;

    static readonly GuildMaster: GuildPosition = {
        Name: 'Guild Master',
        Level: 1
    };
    static readonly 1 = GuildPositionDecode.GuildMaster;
}
