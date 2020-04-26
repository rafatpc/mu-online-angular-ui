import { CharacterClass, PkStatusName } from '../types/character.types';

export abstract class ClassDecode {
    // Dark Wizard, Soul Master & Grand Master
    static readonly 0: CharacterClass = { ClassName: 'Dark Wizard', ClassImage: '/assets/classes/dark-wizard.jpg' };
    static readonly 1: CharacterClass = { ClassName: 'Soul Master', ClassImage: '/assets/classes/soul-master.jpg' };
    static readonly 2: CharacterClass = { ClassName: 'Grand Master', ClassImage: '/assets/classes/grand-master.jpg' };
    static readonly 3: CharacterClass = { ClassName: 'Grand Master', ClassImage: '/assets/classes/grand-master.jpg' };
    // Dark Knight, Blade Knight & Blade Master
    static readonly 16: CharacterClass = { ClassName: 'Dark Knight', ClassImage: '/assets/classes/dark-knight.jpg' };
    static readonly 17: CharacterClass = { ClassName: 'Blade Knight', ClassImage: '/assets/classes/blade-knight.jpg' };
    static readonly 18: CharacterClass = { ClassName: 'Blade Master', ClassImage: '/assets/classes/blade-master.jpg' };
    static readonly 19: CharacterClass = { ClassName: 'Blade Master', ClassImage: '/assets/classes/blade-master.jpg' };
    // Elf, Muse Elf & High Elf
    static readonly 32: CharacterClass = { ClassName: 'Fairy Elf', ClassImage: '/assets/classes/fairy-elf.jpg' };
    static readonly 33: CharacterClass = { ClassName: 'Muse Elf', ClassImage: '/assets/classes/muse-elf.jpg' };
    static readonly 34: CharacterClass = { ClassName: 'High Elf', ClassImage: '/assets/classes/high-elf.jpg' };
    static readonly 35: CharacterClass = { ClassName: 'High Elf', ClassImage: '/assets/classes/high-elf.jpg' };
    // Magic Gladiator & Duel Master
    static readonly 48: CharacterClass = { ClassName: 'Magic Gladiator', ClassImage: '/assets/classes/magic-gladiator.jpg' };
    static readonly 49: CharacterClass = { ClassName: 'Duel Master', ClassImage: '/assets/classes/duel-master.jpg' };
    static readonly 50: CharacterClass = { ClassName: 'Duel Master', ClassImage: '/assets/classes/duel-master.jpg' };
    // Dark Lord & Lord Emperor
    static readonly 64: CharacterClass = { ClassName: 'Dark Lord', ClassImage: '/assets/classes/dark-lord.jpg' };
    static readonly 65: CharacterClass = { ClassName: 'Lord Emperor', ClassImage: '/assets/classes/lord-emperor.jpg' };
    static readonly 66: CharacterClass = { ClassName: 'Lord Emperor', ClassImage: '/assets/classes/lord-emperor.jpg' };
    // Summoner, Bloody Summoner & Dimension Master
    static readonly 80: CharacterClass = { ClassName: 'Summoner', ClassImage: '/assets/classes/summoner.jpg' };
    static readonly 81: CharacterClass = { ClassName: 'Bloody Summoner', ClassImage: '/assets/classes/bloody-summoner.jpg' };
    static readonly 82: CharacterClass = { ClassName: 'Dimension Master', ClassImage: '/assets/classes/dimension-master.jpg' };
    static readonly 83: CharacterClass = { ClassName: 'Dimension Master', ClassImage: '/assets/classes/dimension-master.jpg' };
    // Undefined
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
