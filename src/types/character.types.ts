import { GuildMember } from './guild.types';

export type MapName = string;

export type PkStatusName = string;

export type CharacterClass = {
    Name: string;
    Code: number | number[];
    Image: string;
    CharacterImage: string;
};

export type MasterSkillTree = {
    Name: string;
    Level: number;
    Points: number;
}

export type CharacterData = {
    Name: string;
    Guild: GuildMember | null;
    Master: MasterSkillTree;
    Online: boolean;
    Class: number;
    Honor: number;
    cLevel: number | string;
    Resets: number | string;
    GrandResets: number | string;
    MapNumber: number;
    MapPosX: number;
    MapPosY: number;
    PkLevel: number;
    PkCount: number;
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

export type AccountCharacters = {
    Id: string;
    GameIDC: string;
    Characters: Partial<CharacterData>[];
};
