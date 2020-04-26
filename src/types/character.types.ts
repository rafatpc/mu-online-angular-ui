import { GuildMember } from './guild.types';

export type MapName = string;

export type PkStatusName = string;

export type CharacterClass = {
    ClassName: string;
    ClassImage: string;
};

export type CharacterData = {
    Name: string;
    Guild: GuildMember | null;
    Online: boolean;
    Class: number;
    ClassImage: string;
    ClassName: string;
    Honor: number;
    cLevel: number | string;
    Resets: number | string;
    GrandResets: number | string;
    Map: MapName;
    MapNumber: number;
    PkLevel: number;
    PkName: PkStatusName;
};

export type OnlineCharacter = {
    ServerName: string;
    ConnectTM: Date;
    DisConnectTM: Date;
    OnlineSince: string;
    OnlineHours: number;
    Guild: Partial<GuildMember>;
    Character: Partial<CharacterData>;
};
