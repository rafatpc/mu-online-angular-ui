import { Pipe, PipeTransform } from '@angular/core';
import { ClassDecode } from '@helpers/character.helpers';
import { CharacterClass } from '@type/character.types';

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
