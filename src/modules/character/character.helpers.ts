import { PkStatusName } from './character.types';

export * from '../class/class-decode.helper';

export abstract class PkStatusDecode {
    static readonly 1: PkStatusName = 'Hero';
    static readonly 2: PkStatusName = 'Hero';
    static readonly 3: PkStatusName = 'Commoner';
    static readonly 4: PkStatusName = '1st Stage Outlaw';
    static readonly 5: PkStatusName = '2nd Stage Outlaw';
    static readonly 6: PkStatusName = 'Murderer';
}
