export type ModuleConfig = {
    conditions: ConditionConfig[],
    rewards: any[]
}

export type ConditionConfig = {
    type: string;
    satisfied: Requirement[];
    lacking: Requirement[];
};

export type Requirement = {
    type: string;
    operator: string;
    value: any;
    actual?: any;
    message?: string;
    condition?: string;
};
