import { CharacterClass, PkStatusName } from '../types/character.types';

export abstract class ClassDecode {
    // Dark Wizard
    static readonly DarkWizard = { ClassName: 'Dark Wizard', ClassImage: '/assets/classes/dark-wizard.jpg', ClassCharacterImage: '/assets/classes/dark-wizard-character.png' };
    static readonly 0: CharacterClass = ClassDecode.DarkWizard;
    // Soul Master
    static readonly SoulMaster = { ClassName: 'Soul Master', ClassImage: '/assets/classes/soul-master.jpg', ClassCharacterImage: '/assets/classes/dark-wizard-character.png' };
    static readonly 1: CharacterClass = ClassDecode.SoulMaster;
    // Grand Master
    static readonly GrandMaster = { ClassName: 'Grand Master', ClassImage: '/assets/classes/grand-master.jpg', ClassCharacterImage: '/assets/classes/dark-wizard-character.png' };
    static readonly 2: CharacterClass = ClassDecode.GrandMaster;
    static readonly 3: CharacterClass = ClassDecode.GrandMaster;

    // Dark Knight
    static readonly DarkKnight = { ClassName: 'Dark Knight', ClassImage: '/assets/classes/dark-knight.jpg', ClassCharacterImage: '/assets/classes/dark-knight-character.png' };
    static readonly 16: CharacterClass = ClassDecode.DarkKnight;
    // Blade Knight
    static readonly BladeKnight = { ClassName: 'Blade Knight', ClassImage: '/assets/classes/blade-knight.jpg', ClassCharacterImage: '/assets/classes/dark-knight-character.png' };
    static readonly 17: CharacterClass = ClassDecode.BladeKnight;
    // Blade Master
    static readonly BladeMaster = { ClassName: 'Blade Master', ClassImage: '/assets/classes/blade-master.jpg', ClassCharacterImage: '/assets/classes/dark-knight-character.png' };
    static readonly 18: CharacterClass = ClassDecode.BladeMaster;
    static readonly 19: CharacterClass = ClassDecode.BladeMaster;

    // Elf
    static readonly Elf = { ClassName: 'Fairy Elf', ClassImage: '/assets/classes/fairy-elf.jpg', ClassCharacterImage: '/assets/classes/fairy-elf-character.png' };
    static readonly 32: CharacterClass = ClassDecode.Elf;
    // Muse Elf
    static readonly MuseElf = { ClassName: 'Muse Elf', ClassImage: '/assets/classes/muse-elf.jpg', ClassCharacterImage: '/assets/classes/fairy-elf-character.png' };
    static readonly 33: CharacterClass = ClassDecode.MuseElf;
    // High Elf
    static readonly HighElf = { ClassName: 'High Elf', ClassImage: '/assets/classes/high-elf.jpg', ClassCharacterImage: '/assets/classes/fairy-elf-character.png' };
    static readonly 34: CharacterClass = ClassDecode.HighElf;
    static readonly 35: CharacterClass = ClassDecode.HighElf;

    // Duel Master
    static readonly MagicGladiator = { ClassName: 'Magic Gladiator', ClassImage: '/assets/classes/magic-gladiator.jpg', ClassCharacterImage: '/assets/classes/magic-gladiator-character.png' };
    static readonly 48: CharacterClass = ClassDecode.MagicGladiator;
    // Duel Master
    static readonly DuelMaster = { ClassName: 'Duel Master', ClassImage: '/assets/classes/duel-master.jpg', ClassCharacterImage: '/assets/classes/magic-gladiator-character.png' };
    static readonly 49: CharacterClass = ClassDecode.DuelMaster;
    static readonly 50: CharacterClass = ClassDecode.DuelMaster;

    // Dark Lord
    static readonly DarkLord = { ClassName: 'Dark Lord', ClassImage: '/assets/classes/dark-lord.jpg', ClassCharacterImage: '/assets/classes/dark-lord-character.png' };
    static readonly 64: CharacterClass = ClassDecode.DarkLord
    // Lord Emperor
    static readonly LordEmperor = { ClassName: 'Lord Emperor', ClassImage: '/assets/classes/lord-emperor.jpg', ClassCharacterImage: '/assets/classes/dark-lord-character.png' };
    static readonly 65: CharacterClass = ClassDecode.LordEmperor;
    static readonly 66: CharacterClass = ClassDecode.LordEmperor;

    // Summoner
    static readonly Summoner = { ClassName: 'Summoner', ClassImage: '/assets/classes/summoner.jpg', ClassCharacterImage: '/assets/classes/bloody-summoner-character.png' };
    static readonly 80: CharacterClass = ClassDecode.Summoner;
    // Bloody Summoner
    static readonly BloodySummoner = { ClassName: 'Bloody Summoner', ClassImage: '/assets/classes/bloody-summoner.jpg', ClassCharacterImage: '/assets/classes/bloody-summoner-character.png' };
    static readonly 81: CharacterClass = ClassDecode.BloodySummoner;
    // Dimension Master
    static readonly DimensionMaster = { ClassName: 'Dimension Master', ClassImage: '/assets/classes/dimension-master.jpg', ClassCharacterImage: '/assets/classes/bloody-summoner-character.png' };
    static readonly 82: CharacterClass = ClassDecode.DimensionMaster;
    static readonly 83: CharacterClass = ClassDecode.DimensionMaster;

    // Undefined
    static readonly Undefined: CharacterClass = {
        ClassName: 'Undefined',
        ClassImage: '/assets/classes/undefined.jpg',
        ClassCharacterImage: '/assets/classes/undefined-character.png'
    }
}

export abstract class PkStatusDecode {
    static readonly 1: PkStatusName = 'Hero';
    static readonly 2: PkStatusName = 'Hero';
    static readonly 3: PkStatusName = 'Commoner';
    static readonly 4: PkStatusName = '1st Stage Outlaw';
    static readonly 5: PkStatusName = '2nd Stage Outlaw';
    static readonly 6: PkStatusName = 'Murderer';
}
