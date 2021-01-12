export interface TaskItem {
    id: string;
    name: string;
    priority: number;
}

export const TaskPriorityEnum = [
    { name: "High", id: 0},
    { name: "Medium", id: 1},
    { name: "Low", id: 2}
];
