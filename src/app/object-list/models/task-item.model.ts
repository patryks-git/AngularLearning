export interface TaskItem {
    id: string;
    name: string;
    priority: TaskPriorityEnum;
}

export enum TaskPriorityEnum {
    Default = 0,
    High = 1,
    Low = 2,
}