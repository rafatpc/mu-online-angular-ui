import { Pipe, PipeTransform } from '@angular/core';
import { ClassDecode } from 'src/modules/character/character.helpers';
import { CharacterClass } from 'src/modules/character/character.types';

// Transforms character class to character image src
@Pipe({ name: 'ClassCharacterImage' })
export class ClassCharacterImagePipe implements PipeTransform {
    transform(Class: number): string {
        const ClassData: CharacterClass = ClassDecode[Class];

        if (!ClassData) {
            return ClassDecode.Undefined.CharacterImage;
        }

        return ClassData.CharacterImage;
    }
}
