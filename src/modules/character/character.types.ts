import { GuildMember } from '../guild/guild.types';
import { DecodedItem } from '../items/items.types';

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
};

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
    Strength: number;
    Dexterity: number;
    Vitality: number;
    Energy: number;
    Leadership: number;
    Inventory: DecodedInventory;
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

export type DecodedInventory = {
    Equipped: DecodedItem[];
    Storage: DecodedItem[];
};
