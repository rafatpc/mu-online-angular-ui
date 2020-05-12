import { Pipe, PipeTransform } from '@angular/core';

import { ConditionConfig, Requirement } from './module.types';

@Pipe({ name: 'SatisfiedRequirements' })
export class SatisfiedRequirementsPipe implements PipeTransform {
    transform(conditions: ConditionConfig[]): Requirement[] {
        return conditions.reduce((requirements, condition) => {
            const { type, satisfied } = condition;

            if (satisfied || satisfied.length > 0) {
                if (typeof satisfied === 'boolean') {
                    return [
                        ...requirements,
                        { condition: type, satisfied }
                    ];
                }

                return [
                    ...requirements,
                    ...satisfied.map(satisfied => ({ condition: type, ...satisfied }))
                ];
            }

            return requirements;
        }, []);
    }
}
