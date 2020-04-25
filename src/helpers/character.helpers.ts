import { CharacterClass, PkStatusName } from '../types/character.types';

export abstract class ClassDecode {
    static readonly 0: CharacterClass = { ClassName: 'Dark Wizard', ClassImage: '/assets/classes/dark-wizard.jpg' };
    static readonly 1: CharacterClass = { ClassName: 'Soul Master', ClassImage: '/assets/classes/soul-master.jpg' };
    static readonly 17: CharacterClass = { ClassName: 'Dark Knight', ClassImage: '/assets/classes/dark-knight.jpg' };
    static readonly 18: CharacterClass = { ClassName: 'Blade Knight', ClassImage: '/assets/classes/blade-knight.jpg' };
    static readonly 32: CharacterClass = { ClassName: 'Fairy Elf', ClassImage: '/assets/classes/fairy-elf.jpg' };
    static readonly 33: CharacterClass = { ClassName: 'Muse Elf', ClassImage: '/assets/classes/muse-elf.jpg' };
    static readonly 48: CharacterClass = { ClassName: 'Magic Gladiator', ClassImage: '/assets/classes/magic-gladiator.jpg' };
    static readonly Undefined: CharacterClass = { ClassName: 'Undefined', ClassImage: '/assets/classes/magic-gladiator.jpg' }
}

export abstract class PkStatusDecode {
    static readonly 1: PkStatusName = 'Hero';
    static readonly 2: PkStatusName = 'Hero';
    static readonly 3: PkStatusName = 'Commoner';
    static readonly 4: PkStatusName = '1st Stage Outlaw';
    static readonly 5: PkStatusName = '2nd Stage Outlaw';
    static readonly 6: PkStatusName = 'Murderer';
}
