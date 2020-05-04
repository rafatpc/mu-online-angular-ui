import { Pipe, PipeTransform } from '@angular/core';
import { ClassDecode } from '@helpers/character.helpers';
import { CharacterClass } from 'src/modules/character/character.types';

// Transforms character class to image src
@Pipe({ name: 'ClassName' })
export class ClassNamePipe implements PipeTransform {
    transform(Class: number): string {
        const ClassData: CharacterClass = ClassDecode[Class];

        if (!ClassData) {
            return ClassDecode.Undefined.Name;
        }

        return ClassData.Name;
    }
}
