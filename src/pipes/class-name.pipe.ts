import { Pipe, PipeTransform } from '@angular/core';
import { ClassDecode } from '@helpers/character.helpers';
import { CharacterClass } from '@type/character.types';

// Transforms map number to name
@Pipe({ name: 'ClassName' })
export class ClassNamePipe implements PipeTransform {
    transform(Class: number): string {
        const ClassData: CharacterClass = ClassDecode[Class];

        console.log(Class, ClassData);


        if (!ClassData) {
            return ClassDecode.Undefined.Name;
        }

        return ClassData.Name;
    }
}
