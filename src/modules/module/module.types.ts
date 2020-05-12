export type ModuleConfig = {
    conditions: ConditionConfig[],
    rewards: any[]
}

export type ConditionConfig = {
    type: string;
    satisfied: SatisfiedRequirements[];
    lacking: LackingRequirements[];
};

export type SatisfiedRequirements = {
    condition?: string;
    type: string;
    operator: string;
    value: any
};

export type LackingRequirements = {
    condition?: string;
    type: string;
    actual: any;
    value: any;
};
