import { Pipe, PipeTransform } from '@angular/core';

import { ConditionConfig, LackingRequirements } from './module.types';

@Pipe({ name: 'LackingRequirements' })
export class LackingRequirementsPipe implements PipeTransform {
    transform(conditions: ConditionConfig[]): LackingRequirements[] {
        return conditions.reduce((requirements, condition) => {
            const { type, lacking } = condition;

            if (lacking || lacking.length > 0) {
                if (typeof lacking === 'boolean') {
                    return [
                        ...requirements,
                        { condition: type, lacking }
                    ];
                }

                return [
                    ...requirements,
                    ...lacking.map(lacking => ({ condition: type, ...lacking }))
                ];
            }

            return requirements;
        }, []);
    }
}
