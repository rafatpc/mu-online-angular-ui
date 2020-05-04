import { Pipe, PipeTransform } from '@angular/core';
import { ClassDecode } from '../character/character.helpers';
import { CharacterClass } from '../character/character.types';

// Transforms character class to image src
@Pipe({ name: 'ClassImage' })
export class ClassImagePipe implements PipeTransform {
    transform(Class: number): string {
        const ClassData: CharacterClass = ClassDecode[Class];

        if (!ClassData) {
            return ClassDecode.Undefined.Image;
        }

        return ClassData.Image;
    }
}
