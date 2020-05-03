export interface ItemConfigMap {
    [type: number]: ItemConfig[];
}

export type ItemConfig = {
    WS_Id: number;
    WS_Category: number;
    WS_Hidden: number;
    Type: number;
    Id: number;
    X: number;
    Y: number;
    Serial: number;
    Option: number;
    Name: string;
    Level: number;
    Durability: number;
    ReqLevel: number;
    Strength: number;
    Dexterity: number;
    Energy: number;
    Vitality: number;
    Leadership: number;
    Wizard: number;
    Knight: number;
    Elf: number;
    Gladiator: number;
    Lord: number;
    Summoner: number;
    Ancient: string[] | null;
    Skipp: { Id: number, Name: string } | null;
};

export type DecodedItem = {
    slot?: number;
    id: number;
    group: number;
    level: number;
    skill: boolean;
    luck: boolean;
    option: number;
    ancient: number;
    refinery: number;
    harmony: HarmonyOption;
    excellent: ExcellentOption[],
    sockets: SocketOption[],
    durability: number;
    serial: string;
};

export type ExcellentOption = boolean;

export type HarmonyOption = {
    type: number;
    level: number;
};

export type SocketOption = {
    type: number;
    level: number;
};
