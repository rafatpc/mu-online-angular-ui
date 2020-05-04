import { CharacterClass } from 'src/modules/character/character.types';

export abstract class ClassDecode {
    // Dark Wizard
    static readonly DarkWizard: CharacterClass = {
        Code: 0,
        Name: 'Dark Wizard',
        Image: '/assets/classes/dark-wizard.jpg',
        CharacterImage: '/assets/classes/dark-wizard-character.png'
    };
    static readonly 0 = ClassDecode.DarkWizard;

    // Soul Master
    static readonly SoulMaster: CharacterClass = {
        Code: 1,
        Name: 'Soul Master',
        Image: '/assets/classes/soul-master.jpg',
        CharacterImage: '/assets/classes/dark-wizard-character.png'
    };
    static readonly 1 = ClassDecode.SoulMaster;

    // Grand Master
    static readonly GrandMaster: CharacterClass = {
        Code: [2, 3],
        Name: 'Grand Master',
        Image: '/assets/classes/grand-master.jpg',
        CharacterImage: '/assets/classes/dark-wizard-character.png'
    };
    static readonly 2 = ClassDecode.GrandMaster;
    static readonly 3 = ClassDecode.GrandMaster;

    // Dark Knight
    static readonly DarkKnight: CharacterClass = {
        Code: 16,
        Name: 'Dark Knight',
        Image: '/assets/classes/dark-knight.jpg',
        CharacterImage: '/assets/classes/dark-knight-character.png'
    };
    static readonly 16 = ClassDecode.DarkKnight;

    // Blade Knight
    static readonly BladeKnight: CharacterClass = {
        Code: 17,
        Name: 'Blade Knight',
        Image: '/assets/classes/blade-knight.jpg',
        CharacterImage: '/assets/classes/dark-knight-character.png'
    };
    static readonly 17 = ClassDecode.BladeKnight;

    // Blade Master
    static readonly BladeMaster: CharacterClass = {
        Code: [18, 19],
        Name: 'Blade Master',
        Image: '/assets/classes/blade-master.jpg',
        CharacterImage: '/assets/classes/dark-knight-character.png'
    };
    static readonly 18 = ClassDecode.BladeMaster;
    static readonly 19 = ClassDecode.BladeMaster;

    // Elf
    static readonly Elf: CharacterClass = {
        Code: 32,
        Name: 'Fairy Elf',
        Image: '/assets/classes/fairy-elf.jpg',
        CharacterImage: '/assets/classes/fairy-elf-character.png'
    };
    static readonly 32 = ClassDecode.Elf;

    // Muse Elf
    static readonly MuseElf: CharacterClass = {
        Code: 33,
        Name: 'Muse Elf',
        Image: '/assets/classes/muse-elf.jpg',
        CharacterImage: '/assets/classes/fairy-elf-character.png'
    };
    static readonly 33 = ClassDecode.MuseElf;

    // High Elf
    static readonly HighElf: CharacterClass = {
        Code: [34, 35],
        Name: 'High Elf',
        Image: '/assets/classes/high-elf.jpg',
        CharacterImage: '/assets/classes/fairy-elf-character.png'
    };
    static readonly 34 = ClassDecode.HighElf;
    static readonly 35 = ClassDecode.HighElf;

    // Duel Master
    static readonly MagicGladiator: CharacterClass = {
        Code: 48,
        Name: 'Magic Gladiator',
        Image: '/assets/classes/magic-gladiator.jpg',
        CharacterImage: '/assets/classes/magic-gladiator-character.png'
    };
    static readonly 48 = ClassDecode.MagicGladiator;

    // Duel Master
    static readonly DuelMaster: CharacterClass = {
        Code: [49, 50],
        Name: 'Duel Master',
        Image: '/assets/classes/duel-master.jpg',
        CharacterImage: '/assets/classes/magic-gladiator-character.png'
    };
    static readonly 49 = ClassDecode.DuelMaster;
    static readonly 50 = ClassDecode.DuelMaster;

    // Dark Lord
    static readonly DarkLord: CharacterClass = {
        Code: 64,
        Name: 'Dark Lord',
        Image: '/assets/classes/dark-lord.jpg',
        CharacterImage: '/assets/classes/dark-lord-character.png'
    };
    static readonly 64 = ClassDecode.DarkLord;

    // Lord Emperor
    static readonly LordEmperor: CharacterClass = {
        Code: [65, 66],
        Name: 'Lord Emperor',
        Image: '/assets/classes/lord-emperor.jpg',
        CharacterImage: '/assets/classes/dark-lord-character.png'
    };
    static readonly 65 = ClassDecode.LordEmperor;
    static readonly 66 = ClassDecode.LordEmperor;

    // Summoner
    static readonly Summoner: CharacterClass = {
        Code: 80,
        Name: 'Summoner',
        Image: '/assets/classes/summoner.jpg',
        CharacterImage: '/assets/classes/bloody-summoner-character.png'
    };
    static readonly 80 = ClassDecode.Summoner;

    // Bloody Summoner
    static readonly BloodySummoner: CharacterClass = {
        Code: 81,
        Name: 'Bloody Summoner',
        Image: '/assets/classes/bloody-summoner.jpg',
        CharacterImage: '/assets/classes/bloody-summoner-character.png'
    };
    static readonly 81 = ClassDecode.BloodySummoner;

    // Dimension Master
    static readonly DimensionMaster: CharacterClass = {
        Code: [82, 83],
        Name: 'Dimension Master',
        Image: '/assets/classes/dimension-master.jpg',
        CharacterImage: '/assets/classes/bloody-summoner-character.png'
    };
    static readonly 82 = ClassDecode.DimensionMaster;
    static readonly 83 = ClassDecode.DimensionMaster;

    // Undefined
    static readonly Undefined: CharacterClass = {
        Code: null,
        Name: 'Undefined',
        Image: '/assets/classes/undefined.jpg',
        CharacterImage: '/assets/classes/undefined-character.png'
    };
}
