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
