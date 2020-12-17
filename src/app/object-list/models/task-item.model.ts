export interface TaskItem {
    id: string;
    name: string;
    priority: TaskPriorityEnum;
}

export enum TaskPriorityEnum {
    Default = 0
}