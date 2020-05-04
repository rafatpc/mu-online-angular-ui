import { GuildPosition } from './guild.types';

export abstract class GuildPositionDecode {
    static readonly GuildMaster: GuildPosition = {
        Name: 'Guild Master',
        Level: 128
    };
    static readonly 128 = GuildPositionDecode.GuildMaster;

    static readonly AssistantGuildMaster: GuildPosition = {
        Name: 'Assistant Guild Master',
        Level: 64
    };
    static readonly 64 = GuildPositionDecode.AssistantGuildMaster;

    static readonly BattleMaster: GuildPosition = {
        Name: 'Battle Master',
        Level: 32
    };
    static readonly 32 = GuildPositionDecode.BattleMaster;

    static readonly Normal: GuildPosition = {
        Name: 'Normal',
        Level: 0
    };
    static readonly 0 = GuildPositionDecode.Normal;
}
