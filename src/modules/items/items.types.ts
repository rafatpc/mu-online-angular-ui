export type ItemConfigRaw = {
    Items: ItemConfig[];
    Sockets: Socket[];
};

export type ItemConfigRawMapped = {
    Items: ItemConfigMap;
    Sockets: Socket[];
}

export interface ItemConfigMap {
    [type: number]: ItemConfig[];
}

export interface ItemDataMap {
    [type: number]: ItemData;
}

export type ItemData = {
    ExcellentOptions: ExcellentOptionsMap;
    Option: string[];
    OptionPercentage: boolean;
    Luck: boolean;
}

export interface ExcellentOptionsMap {
    [type: number]: string[];
}

export type Socket = {
    Number: number;
    Type: number;
    Id: number;
    Name: string;
    Level1: number;
    Level2: number;
    Level3: number;
    Level4: number;
    Level5: number;
};

export type ItemConfig = {
    WS_Id: number;
    WS_Category: number;
    WS_Hidden: number;
    Type: number;
    Id: number;
    Slot: number;
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
    Socket: boolean;
    Skill: { Id: number, Name: string } | null;
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
